package com.cognizant.bloodbank.bloodservice.service;

import java.text.SimpleDateFormat;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.bloodbank.bloodservice.dto.SlotBookingDTO;
import com.cognizant.bloodbank.bloodservice.exception.SlotAlreadyTaken;
import com.cognizant.bloodbank.bloodservice.model.BloodDonor;
import com.cognizant.bloodbank.bloodservice.model.Hospital;
import com.cognizant.bloodbank.bloodservice.model.Slot;
import com.cognizant.bloodbank.bloodservice.model.SlotBooking;
import com.cognizant.bloodbank.bloodservice.repository.BloodDonorRepository;
import com.cognizant.bloodbank.bloodservice.repository.HospitalRepository;
import com.cognizant.bloodbank.bloodservice.repository.SlotBookingRepository;
import com.cognizant.bloodbank.bloodservice.repository.SlotRepository;
import com.cognizant.bloodbank.bloodservice.repository.UserRepository;

@Service()
public class HospitalBookingServiceImpl implements HospitalBookingService {
	private static final Logger LOGGER = LoggerFactory.getLogger(HospitalBookingServiceImpl.class);
	@Autowired
	HospitalRepository hospitalRepository;
	@Autowired
	BloodDonorRepository bloodDonorRepository;
	@Autowired
	SlotRepository slotRepository;
	@Autowired
	SlotBookingRepository slotBookingrepository;
	@Autowired
	UserRepository userRepository;

	@Override
	public void addTimeSlot(SlotBookingDTO slotBookingDTO, String username) {
		LOGGER.info("addTimeSlot Start");
		Hospital hospital = new Hospital(0, slotBookingDTO.getHospitalName(), slotBookingDTO.getCity());
		Hospital hospitalBackEnd = hospitalRepository.findByHospitalNameAndCity(slotBookingDTO.getHospitalName(),
				slotBookingDTO.getCity());
		if (hospitalBackEnd == null)
			hospitalRepository.save(hospital);

		hospitalBackEnd = hospitalRepository.findByHospitalNameAndCity(slotBookingDTO.getHospitalName(),
				slotBookingDTO.getCity());
		BloodDonor bloodDonorBackEnd = bloodDonorRepository.findByBloodGroupAndStateAndAreaAndPinCodeAndContactNo(
				slotBookingDTO.getBloodGroup(), slotBookingDTO.getState(), slotBookingDTO.getArea(),
				slotBookingDTO.getPinCode(), slotBookingDTO.getContactNo());
		BloodDonor bloodDonor = new BloodDonor(slotBookingDTO.getBloodGroup(), slotBookingDTO.getState(),
				slotBookingDTO.getArea(), slotBookingDTO.getPinCode(), slotBookingDTO.getContactNo(),
				userRepository.findByUsername(username));
		if (bloodDonorBackEnd == null)
			bloodDonorRepository.save(bloodDonor);

		bloodDonorBackEnd = bloodDonorRepository.findByBloodGroupAndStateAndAreaAndPinCodeAndContactNo(
				slotBookingDTO.getBloodGroup(), slotBookingDTO.getState(), slotBookingDTO.getArea(),
				slotBookingDTO.getPinCode(), slotBookingDTO.getContactNo());
		Slot slot = slotRepository.findByTime(slotBookingDTO.getTime());
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		String date = format.format(slotBookingDTO.getDate());

		int slotBookingLength = this.slotBookingrepository.checkSlot(hospitalBackEnd.getId(), slot.getId(), date);
		System.out.println(slotBookingLength);
		if (slotBookingLength == 0) {
			SlotBooking slotBooking = new SlotBooking(hospitalBackEnd, slot, slotBookingDTO.getDate(),
					bloodDonorBackEnd);
			slotBookingrepository.save(slotBooking);
		} else {
			throw new SlotAlreadyTaken();
		}
		LOGGER.info("END Add Donor");
	}

}
