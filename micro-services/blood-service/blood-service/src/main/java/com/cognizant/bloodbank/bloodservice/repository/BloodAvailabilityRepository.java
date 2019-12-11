package com.cognizant.bloodbank.bloodservice.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.bloodbank.bloodservice.dto.AdminAvailabilityDTO;
import com.cognizant.bloodbank.bloodservice.model.BloodAvailability;

@Repository
public interface BloodAvailabilityRepository extends JpaRepository<BloodAvailability, Integer> {

	@Query(value = "select ba from BloodAvailability ba where ba.bloodGroup = ?1 and ba.state = ?2 and ba.area = ?3")
	public Set<BloodAvailability> getAllBloodAvailability(String bloodGroup, String state, String area);

	@Query("SELECT new com.cognizant.bloodbank.bloodservice.dto.AdminAvailabilityDTO(BD.bloodGroup, COUNT(BD.id)) FROM BloodAvailability BD GROUP BY BD.bloodGroup")
	public Set<AdminAvailabilityDTO> getAvailabilityToAdmin();
}
