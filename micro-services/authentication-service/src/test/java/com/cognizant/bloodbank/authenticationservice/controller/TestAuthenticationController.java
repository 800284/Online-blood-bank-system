package com.cognizant.bloodbank.authenticationservice.controller;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import com.cognizant.bloodbank.authenticationservice.model.User;
import com.cognizant.bloodbank.authenticationservice.security.AppUserDetailsService;

@AutoConfigureMockMvc
@WebMvcTest
@ContextConfiguration(classes = {AuthenticationController.class})
public class TestAuthenticationController {

//	@Autowired
//    private MockMvc mockMvc;
//	@Autowired
//    private WebApplicationContext wac;
//	User user;
//	   @BeforeEach
//	    void setup() {
//	        this.mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).build();
//	    }
//
//	@Test
//	public void getUser() throws Exception {
//		mockMvc.perform(MockMvcRequestBuilders.get("/blood-bank/get-user"))
//		.andExpect(status().isOk()).andReturn();
//				
//	}

}
