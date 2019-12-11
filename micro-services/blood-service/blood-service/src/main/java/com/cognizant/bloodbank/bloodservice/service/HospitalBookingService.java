package com.cognizant.bloodbank.bloodservice.service;

import com.cognizant.bloodbank.bloodservice.dto.SlotBookingDTO;

public interface HospitalBookingService {
	public void addTimeSlot(SlotBookingDTO slotBookingDTO,String username);
}
