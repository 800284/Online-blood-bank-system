package com.cognizant.bloodbank.bloodservice.controllers;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.bloodbank.bloodservice.model.BloodNotification;
import com.cognizant.bloodbank.bloodservice.service.BloodNotificationService;

@RestController
@RequestMapping("/blood-bank")
public class BloodNotificationController {

	@Autowired
	BloodNotificationService bloodNotificationService;

	@GetMapping("/notification/{userName}")
	public Set<BloodNotification> getAllBloodNotification(@PathVariable String userName) {
		return this.bloodNotificationService.getAllNotification(userName);
	}

	@DeleteMapping("/notification-history-id/{id}")
	public void deleteNotificationById(@PathVariable int id) {
		this.bloodNotificationService.removeNotificationById(id);
	}

	@PutMapping("/update-notification/{userName}")
	public void updateNotificationStatus(@PathVariable String userName) {
		this.bloodNotificationService.updateNotificationStatus(userName);
	}

	@PostMapping("/blood-donation-notification/{userName}")
	public void postBloodDonationNotification(@PathVariable String userName) {
		this.bloodNotificationService.postBloodDonationNotification(userName);
	}

	@PostMapping("/blood-donation-requirement-notification/{bloodGroup}")
	public void postBloodDonationNotificationBloodGroup(@PathVariable String bloodGroup) {
		this.bloodNotificationService.postBloodDonationNotificationBloodGroup(bloodGroup);
	}

}
