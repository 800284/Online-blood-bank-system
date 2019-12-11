package com.cognizant.bloodbank.bloodservice.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.bloodbank.bloodservice.model.BloodDonor;

@Repository
public interface BloodDonorRepository extends JpaRepository<BloodDonor, Integer> {
	@Query(value = "select COUNT(bd_id) from blood_donor where bd_blood_group=?1 and bd_state=?2 and bd_area=?3 and bd_pin_code=?4 and bd_contact_no=?5 and bd_us_id = ?6", nativeQuery = true)
	public int checkDonor(String bloodGroup, String state, String area, int pincode, long contact, int userId);

	public BloodDonor findByBloodGroupAndStateAndAreaAndPinCodeAndContactNo(String bloodGroup, String state,
			String area, int pinCode, long contactNo);

	@Query(value = "select bd_id from blood_donor inner join user on  blood_donor.bd_us_id = user.us_id inner join slot_booking on blood_donor.bd_id = slot_booking.sb_bd_id where (user.us_username = ?1 and CURDATE()-slot_booking.sb_date > 90)", nativeQuery = true)
	public Set<Integer> getAllDonorNotification(String userName);

	@Query(value = "select us_id from user inner join blood_donor on user.us_id = blood_donor.bd_us_id inner join slot_booking on blood_donor.bd_id = slot_booking.sb_bd_id where (blood_donor.bd_blood_group = ?1 and CURDATE()-slot_booking.sb_date > 90)", nativeQuery = true)
	public Set<Integer> getAllDonorNotificationBloodGroup(String bloodGroup);

}