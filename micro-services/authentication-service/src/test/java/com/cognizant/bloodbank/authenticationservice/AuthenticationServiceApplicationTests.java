package com.cognizant.bloodbank.authenticationservice;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;
import java.util.HashSet;
import java.util.Set;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import org.springframework.security.crypto.password.PasswordEncoder;

import com.cognizant.bloodbank.authenticationservice.exception.UserAlreadyExistsException;
import com.cognizant.bloodbank.authenticationservice.model.Role;
import com.cognizant.bloodbank.authenticationservice.model.User;
import com.cognizant.bloodbank.authenticationservice.repository.RoleRepository;
import com.cognizant.bloodbank.authenticationservice.repository.UserRepository;
import com.cognizant.bloodbank.authenticationservice.security.AppUserDetailsService;
import com.google.common.base.Optional;



@SpringBootTest
class AuthenticationServiceApplicationTests {

private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationServiceApplicationTests.class);
	
	@Autowired
	PasswordEncoder encoder;
	
	@MockBean 
	UserRepository usersRepository;
	
	@Autowired
	AppUserDetailsService userDetailsService;

	@MockBean
	RoleRepository roleRepository;
	
	public User newUser() {
		
		LOGGER.info("Start");
		Set<Role> role = new HashSet<Role>();
		role.add(new Role(2, "USER"));
		User user = new User(39, "yuoii", "ss", "ss", "sss", 111, "aaa", 1234567890L, "sasa@dd.com", 45,"sss", "sss", 456789, "ssss", role);
		return user;
	}
	
	public User createUser(){
		Set<Role> role = new HashSet<Role>();
		role.add(new Role(2, "USER"));
		User user = new User(39, "yuoii", "ss", "ss", "sss", 111, "aaa", 1234567890L, "sasa@dd.com", 45,"sss", "sss", 456789, "ssss", role);
		return user;
	}
	
	@Test
	public void userDetailsSignUpTestException() {
		Role role = new Role();
		role.setId(2);
		role.setName("USER");
		when(usersRepository.findByUsername(newUser().getUsername())).thenReturn(createUser());
		when(roleRepository.findByName("youii")).thenReturn(role);
		assertThrows(UserAlreadyExistsException.class, () -> 
						userDetailsService.signup(createUser()));
	}
	
	@Test
	public void userDetailsSignUpTest() {
		when(usersRepository.findByUsername(newUser().getUsername())).thenReturn(null);
		assertDoesNotThrow(() -> userDetailsService.signup(createUser()));
	}

}
