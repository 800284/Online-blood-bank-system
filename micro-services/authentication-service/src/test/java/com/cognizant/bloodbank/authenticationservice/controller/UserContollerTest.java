package com.cognizant.bloodbank.authenticationservice.controller;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.HashSet;
import java.util.Set;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.cognizant.bloodbank.authenticationservice.model.Role;
import com.cognizant.bloodbank.authenticationservice.model.User;
import com.fasterxml.jackson.databind.ObjectMapper;

@ExtendWith(SpringExtension.class)
@AutoConfigureMockMvc
@SpringBootTest
public class UserContollerTest {
//	@Autowired
//	private MockMvc mockMvc;
//	@Autowired
//	private UserController userController;
//
//	@Test
//	public void addUser() throws Exception {
//
//		Set<Role> role = new HashSet<Role>();
//		role.add(new Role(2, "USER"));
//
//		mockMvc.perform(MockMvcRequestBuilders.post("/blood-bank/users")
//				.content(asJsonString(new User(96, "useruser", "ss", "ss", "sss", 111, "aaa", 1234567890L, "sasa@dd.com", 45,"sss", "sss", 456789, "ssss", role)))
//				.contentType(MediaType.APPLICATION_JSON)
//				.accept(MediaType.APPLICATION_JSON))
//					.andExpect(status().isOk());
//				
//	}
//	
//	@Test
//	public void getUser() throws Exception{
//		mockMvc.perform(MockMvcRequestBuilders.get("/blood-bank/users/get-user")).andExpect(status().isOk());
//	}
//
//	public static String asJsonString(final Object obj) {
//		try {
//			return new ObjectMapper().writeValueAsString(obj);
//		} catch (Exception e) {
//			throw new RuntimeException(e);
//		}
//	}
}
