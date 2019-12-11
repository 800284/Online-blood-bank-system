package com.cognizant.bloodbank.bloodservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.bloodbank.bloodservice.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	public User findByUsername(String username);
	
	@Query(value="select us_id from user where us_username=?1",nativeQuery=true)
	public int findIdByUsername(String username);
}