package com.cognizant.bloodbank.bloodservice.service;

import java.util.Set;

import com.cognizant.bloodbank.bloodservice.dto.AdminAvailabilityDTO;
import com.cognizant.bloodbank.bloodservice.model.BloodAvailability;

public interface BloodAvailabilityService {
	public Set<BloodAvailability> getAllBloodAvailability(String bloodGroup, String state, String area);

	public Set<AdminAvailabilityDTO> getAllBloodAvailabilityToAdmin();

}
