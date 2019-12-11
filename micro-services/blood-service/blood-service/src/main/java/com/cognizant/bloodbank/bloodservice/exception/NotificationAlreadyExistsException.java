package com.cognizant.bloodbank.bloodservice.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class NotificationAlreadyExistsException extends RuntimeException{
	private static final long serialVersionUID = 1L;
	private static final Logger LOGGER = LoggerFactory.getLogger(UserAlreadyExistsException.class);

	public NotificationAlreadyExistsException() {
		super();
		LOGGER.info("START");
	}

	@Override
	public String toString() {
		return "Nofication already exists !!";
	}
}
