package com.cognizant.bloodbank.bloodservice.controllers;

import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.bloodbank.bloodservice.dto.AdminAvailabilityDTO;
import com.cognizant.bloodbank.bloodservice.model.BloodAvailability;
import com.cognizant.bloodbank.bloodservice.service.BloodAvailabilityService;
import com.cognizant.bloodbank.bloodservice.service.BloodNotificationService;

@RestController
@RequestMapping("/blood-bank/blood-availability")
public class BloodAvailabilityController {

	private static final Logger LOGGER = LoggerFactory.getLogger(BloodAvailabilityController.class);

	@Autowired
	BloodAvailabilityService bloodAvailabilityService;
	@Autowired
	BloodNotificationService notificationService;

	@GetMapping("/{bloodGroup}/{state}/{area}")
	public Set<BloodAvailability> getAllBloodAvailability(@PathVariable String bloodGroup, @PathVariable String state,
			@PathVariable String area) {
		LOGGER.info("START");
		return this.bloodAvailabilityService.getAllBloodAvailability(bloodGroup, state, area);
	}

	@GetMapping("/fetch-blood-availability-admin")
	public Set<AdminAvailabilityDTO> getAllAvailability() {
		return this.bloodAvailabilityService.getAllBloodAvailabilityToAdmin();
	}

	@PostMapping("/insert-notification-specific-blood-group/{bloodGroup}")
	public boolean sendNotificationForSpecificBloodGroup(@PathVariable String bloodGroup) {
		this.notificationService.postBloodDonationNotificationBloodGroup(bloodGroup);
		return true;
	}
}