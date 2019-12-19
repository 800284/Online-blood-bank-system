package com.cognizant.bloodbank.bloodservice.controllers;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.http.MediaType;
import com.cognizant.bloodbank.bloodservice.model.BloodRequirement;
import com.cognizant.bloodbank.bloodservice.service.BloodRequirementService;
import com.fasterxml.jackson.databind.ObjectMapper;

@ExtendWith(SpringExtension.class)
@AutoConfigureMockMvc
@SpringBootTest
public class BloodRequirementControllerTest {

//	@Autowired
//    private MockMvc mockMvc;
//
//	@Autowired
//	BloodRequirementController bloodRequirementController; 
//	
//	@Autowired
//	BloodRequirementService bloodRequirementControllesr; 
//
//	@Test
//	public void getRequirements() throws Exception {
//mockMvc.perform(MockMvcRequestBuilders.get("/blood-requirement/fetch"))
//	.andExpect(status().isOk());
//				
//	}
//	
//	@Test
//	public void postRequirements() throws Exception {
//		mockMvc.perform(MockMvcRequestBuilders.post("/blood-requirement/insert")
//				.content(asJsonString(new BloodRequirement(3, "O+", "Madhya Pradesh", "Gwalior", 474011, "1234567890")))
//				.characterEncoding("utf-8")
//				.contentType(MediaType.APPLICATION_JSON)
//				
//  		      .accept(MediaType.APPLICATION_JSON))
//  		      .andExpect(status().isCreated())
//  		      .andExpect(MockMvcResultMatchers.jsonPath("$.bloodGroup").exists());
//	}
//	
//	public static String asJsonString(final Object obj) {
//	    try {
//	        return new ObjectMapper().writeValueAsString(obj);
//	    } catch (Exception e) {
//	        throw new RuntimeException(e);
//	    }
//	}

}

