package com.cognizant.bloodbank.bloodservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.cognizant.bloodbank.bloodservice.model.BloodRequirement;
import com.cognizant.bloodbank.bloodservice.repository.BloodRequirementRepository;

@Service
public class BloodRequirementServiceImpl implements BloodRequirementService {
	private static final Logger LOGGER = LoggerFactory.getLogger(BloodRequirementServiceImpl.class);
	@Autowired
	BloodRequirementRepository bloodRequirementRepository;

	@Override
	public Boolean insertRequirement(BloodRequirement bloodRequirement) {
		// TODO Auto-generated method stub
		LOGGER.info("start");
		this.bloodRequirementRepository.save(bloodRequirement);
		return true;
	}

	@Override
	public List<BloodRequirement> getAllBloodRequireMent() {
		// TODO Auto-generated method stub
		LOGGER.info("start");
		return this.bloodRequirementRepository.findAll();
	}

}
