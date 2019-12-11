package com.cognizant.bloodbank.bloodservice.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Entity
@Table(name = "hospital")
public class Hospital {
	private static final Logger LOGGER = LoggerFactory.getLogger(Hospital.class);

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ho_id")
	private int id;

	@NotNull
	@Column(name = "ho_hospital_name")
	String hospitalName;

	@NotNull
	@Column(name = "ho_city")
	String city;

	public Hospital() {
		LOGGER.info("START");
	}

	public Hospital(int id, @NotNull String hospitalName, @NotNull String city) {
		super();
		this.id = id;
		this.hospitalName = hospitalName;
		this.city = city;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getHospitalName() {
		return hospitalName;
	}

	public void setHospitalName(String hospitalName) {
		this.hospitalName = hospitalName;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	@Override
	public String toString() {
		return "Hospital [id=" + id + ", hospitalName=" + hospitalName + ", city=" + city + "]";
	}

}
