package com.cognizant.bloodbank.bloodservice.controllers;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.bloodbank.bloodservice.model.BloodRequirement;
import com.cognizant.bloodbank.bloodservice.service.BloodRequirementServiceImpl;

@RestController
@RequestMapping("/blood-requirement")
public class BloodRequirementController {
	private static final Logger LOGGER = LoggerFactory.getLogger(BloodRequirementController.class);
	@Autowired
	BloodRequirementServiceImpl bloodRequirementServiceImpl;

	@PostMapping("/insert")
	Boolean insertBloodRequirement(@RequestBody @Valid BloodRequirement bloodRequirement) {
		LOGGER.info("Start");
		this.bloodRequirementServiceImpl.insertRequirement(bloodRequirement);
		return true;
	}

	@GetMapping("/fetch")
	List<BloodRequirement> getAllBloodRequirement() {
		LOGGER.info("Start");
		return this.bloodRequirementServiceImpl.getAllBloodRequireMent();
	}
}
