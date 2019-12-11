package com.cognizant.bloodbank.bloodservice.service;

import java.util.List;

import com.cognizant.bloodbank.bloodservice.dto.DonorExperienceDTO;

public interface DonorExperienceService {
	public boolean postDonorExperience(DonorExperienceDTO DonorExperienceDTO);

	public List<DonorExperienceDTO> getAllDonorExperience();

}
