package com.cognizant.bloodbank.bloodservice.service;

import java.util.List;

import com.cognizant.bloodbank.bloodservice.model.BloodRequirement;


public interface BloodRequirementService {
	public Boolean insertRequirement(BloodRequirement bloodRequirement);

	public List<BloodRequirement> getAllBloodRequireMent();
}
