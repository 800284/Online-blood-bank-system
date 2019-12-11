package com.cognizant.bloodbank.bloodservice.service;

import java.util.Set;

import com.cognizant.bloodbank.bloodservice.model.BloodNotification;

public interface BloodNotificationService {
	public Set<BloodNotification> getAllNotification(String userName);

	public void removeNotificationById(int id);

	public void updateNotificationStatus(String userName);

	public void postBloodDonationNotification(String userName);

	public void postBloodDonationNotificationBloodGroup(String bloodGroup);

}
