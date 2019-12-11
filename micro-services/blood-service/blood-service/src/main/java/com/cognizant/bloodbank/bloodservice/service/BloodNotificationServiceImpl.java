package com.cognizant.bloodbank.bloodservice.service;

import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.bloodbank.bloodservice.exception.NotificationAlreadyExistsException;
import com.cognizant.bloodbank.bloodservice.model.BloodDonor;
import com.cognizant.bloodbank.bloodservice.model.BloodNotification;
import com.cognizant.bloodbank.bloodservice.model.User;
import com.cognizant.bloodbank.bloodservice.repository.BloodDonorRepository;
import com.cognizant.bloodbank.bloodservice.repository.BloodNotificationRepository;
import com.cognizant.bloodbank.bloodservice.repository.UserRepository;

@Service
public class BloodNotificationServiceImpl implements BloodNotificationService {

	@Autowired
	BloodNotificationRepository bloodNotificationRepository;

	@Autowired
	BloodDonorRepository bloodDonationRepository;

	@Autowired
	UserRepository usersRepository;

	@Override
	public Set<BloodNotification> getAllNotification(String userName) {
		return this.bloodNotificationRepository.getAllNotification(userName);
	}

	@Override
	public void removeNotificationById(int id) {
		this.bloodNotificationRepository.deleteById(id);
	}

	@Override
	public void updateNotificationStatus(String userName) {
		Set<BloodNotification> bloodNotification = this.bloodNotificationRepository.getAllNotification(userName);
		for (BloodNotification notification : bloodNotification) {
			this.bloodNotificationRepository.save(new BloodNotification(notification.getId(), notification.getUser(),
					notification.getNotification(), true));
		}
	}

	@Override
	public void postBloodDonationNotification(String userName) {
		Set<Integer> donor_id = this.bloodDonationRepository.getAllDonorNotification(userName);
		User user = usersRepository.findByUsername(userName);
		for (Integer i : donor_id) {
			BloodDonor donor = bloodDonationRepository.findById(i).get();
			System.out.println("dsadsadasd " + donor.getBloodGroup());
			String message = "Three months before You donated " + donor.getBloodGroup() + " blood with Contact Number "
					+ donor.getContactNo() + ". Book a slot and save life";
			System.out.println(message + "   " + this.bloodNotificationRepository.entryExists(user.getId(), message));
			if (this.bloodNotificationRepository.entryExists(user.getId(), message) == 0) {

				this.bloodNotificationRepository.save(new BloodNotification(0, user, message, false));
			}
		}
	}

	@Override
	public void postBloodDonationNotificationBloodGroup(String bloodGroup) {
		Set<Integer> userId = this.bloodDonationRepository.getAllDonorNotificationBloodGroup(bloodGroup);
		for (Integer i : userId) {
			this.bloodNotificationRepository.save(new BloodNotification(0, this.usersRepository.findById(i).get(),
					"There is a requirement of blood group " + bloodGroup + " Book a slot to donate and save a life.",
					false));
		}
	}

}
