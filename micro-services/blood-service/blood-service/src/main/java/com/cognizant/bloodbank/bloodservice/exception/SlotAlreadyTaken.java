package com.cognizant.bloodbank.bloodservice.exception;

public class SlotAlreadyTaken extends RuntimeException {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public SlotAlreadyTaken() {
		super();
	}

	@Override
	public String toString() {
		return "Slot Already Taken";
	}

}
