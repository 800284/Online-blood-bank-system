package com.cognizant.bloodbank.bloodservice.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.sun.istack.NotNull;

@Entity
@Table(name = "blood_availability")
public class BloodAvailability {
	private static final Logger LOGGER = LoggerFactory.getLogger(BloodAvailability.class);

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ba_id")
	private int id;

	@NotNull
	@Column(name = "ba_blood_group")
	String bloodGroup;

	@NotNull
	@Column(name = "ba_state")
	String state;

	@NotNull
	@Column(name = "ba_area")
	String area;

	@NotNull
	@Column(name = "ba_pincode")
	int pinCode;

	@NotNull
	@Column(name = "ba_contact_number")
	Long contactNo;

	public BloodAvailability() {
		LOGGER.info("START");
	}

	public BloodAvailability(int id, @NotNull String bloodGroup, @NotNull String state, @NotNull String area,
			@NotNull int pinCode, @NotNull Long contactNo) {
		super();
		this.id = id;
		this.bloodGroup = bloodGroup;
		this.state = state;
		this.area = area;
		this.pinCode = pinCode;
		this.contactNo = contactNo;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getBloodGroup() {
		return bloodGroup;
	}

	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public int getPinCode() {
		return pinCode;
	}

	public void setPinCode(int pinCode) {
		this.pinCode = pinCode;
	}

	public Long getContactNo() {
		return contactNo;
	}

	public void setContactNo(Long contactNo) {
		this.contactNo = contactNo;
	}

	@Override
	public String toString() {
		return "BloodAvailability [id=" + id + ", bloodGroup=" + bloodGroup + ", state=" + state + ", area=" + area
				+ ", pinCode=" + pinCode + ", contactNo=" + contactNo + "]";
	}

}
