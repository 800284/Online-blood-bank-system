package com.cognizant.bloodbank.bloodservice.dto;

public class AdminAvailabilityDTO {

	private String bloodGroup;

	private long count;

	public AdminAvailabilityDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public AdminAvailabilityDTO(String bloodGroup, long count) {
		super();
		this.bloodGroup = bloodGroup;
		this.count = count;
	}

	public String getBloodGroup() {
		return bloodGroup;
	}

	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}

	public long getCount() {
		return count;
	}

	public void setCount(long count) {
		this.count = count;
	}

	@Override
	public String toString() {
		return "AdminAvailabiltyDTO [bloodGroup=" + bloodGroup + ", count=" + count + "]";
	}

}
