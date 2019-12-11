package com.cognizant.bloodbank.bloodservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.bloodbank.bloodservice.model.DonorExperience;

@Repository
public interface DonorExperienceRepository extends JpaRepository<DonorExperience, Integer> {

}