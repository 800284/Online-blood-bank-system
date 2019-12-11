package com.cognizant.bloodbank.bloodservice.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.bloodbank.bloodservice.model.BloodNotification;
import com.cognizant.bloodbank.bloodservice.model.User;

@Repository
public interface BloodNotificationRepository extends JpaRepository<BloodNotification, Integer> {

	@Query(value = "select * from user_notification inner join user on user_notification.un_us_id = user.us_id where user.us_username = ?1 ORDER BY un_id DESC", nativeQuery = true)
	public Set<BloodNotification> getAllNotification(String userName);

	@Query(value = "update  user_notification set un_status = 0 where un_id = ?1", nativeQuery = true)
	public void updateNotificationStatusById(int id);

	@Modifying
	@Query(value = "update  user_notification set un_status = 0 where un_us_id = ?1", nativeQuery = true)
	public void updateNotificationStatus(int userId);

	@Query(value = "select count(un_notification) from user_notification where un_us_id=?1 and un_notification=?2", nativeQuery = true)
	public int entryExists(int id, String message);

}