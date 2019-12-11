package com.cognizant.bloodbank.bloodservice.repository;

import org.springframework.stereotype.Repository;

import com.cognizant.bloodbank.bloodservice.model.BloodRequirement;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface BloodRequirementRepository extends JpaRepository<BloodRequirement, Integer> {

}
