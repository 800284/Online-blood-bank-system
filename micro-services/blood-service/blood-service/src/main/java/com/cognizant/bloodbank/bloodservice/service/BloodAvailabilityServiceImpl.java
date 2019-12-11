package com.cognizant.bloodbank.bloodservice.service;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.bloodbank.bloodservice.dto.AdminAvailabilityDTO;
import com.cognizant.bloodbank.bloodservice.model.BloodAvailability;
import com.cognizant.bloodbank.bloodservice.repository.BloodAvailabilityRepository;

@Service
public class BloodAvailabilityServiceImpl implements BloodAvailabilityService {

	@Autowired
	BloodAvailabilityRepository bloodAvailabilityRepository;

	@Override
	public Set<BloodAvailability> getAllBloodAvailability(String bloodGroup, String state, String area) {
		return bloodAvailabilityRepository.getAllBloodAvailability(bloodGroup, state, area);
	}

	@Override
	public Set<AdminAvailabilityDTO> getAllBloodAvailabilityToAdmin() {
		// TODO Auto-generated method stub
		return this.bloodAvailabilityRepository.getAvailabilityToAdmin();
	}

}