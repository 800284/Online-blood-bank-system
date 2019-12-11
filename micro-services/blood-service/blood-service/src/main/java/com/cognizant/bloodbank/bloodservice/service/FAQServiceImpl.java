package com.cognizant.bloodbank.bloodservice.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.bloodbank.bloodservice.model.BloodNotification;
import com.cognizant.bloodbank.bloodservice.model.FAQ;
import com.cognizant.bloodbank.bloodservice.repository.BloodNotificationRepository;
import com.cognizant.bloodbank.bloodservice.repository.FAQrepository;

@Service
public class FAQServiceImpl implements FAQService {

	@Autowired
	FAQrepository faqRepository;

	@Autowired
	BloodNotificationRepository bloodNotificationRepository;

	@Transactional
	@Override
	public List<FAQ> getFAQsForDonor() {
		// TODO Auto-generated method stub
		return faqRepository.getFAQsForDonor();
	}

	@Transactional
	@Override
	public List<FAQ> getFAQsForAdmin() {
		// TODO Auto-generated method stub
		return faqRepository.getFAQsForAdmin();
	}

	@Transactional
	@Override
	public void modifyFAQ(FAQ faq) {
		// TODO Auto-generated method stub
		this.bloodNotificationRepository.save(new BloodNotification(0, faq.getUser(),
				"Your query with question id " + faq.getId() + " is answered", false));
		faqRepository.save(faq);

	}

	@Override
	public List<Integer> getNotification() {
		// TODO Auto-generated method stub
		return faqRepository.getNotifcations();
	}

	@Transactional
	@Override
	public void postQuestion(FAQ faq) {
		// TODO Auto-generated method stub
		faqRepository.save(faq);
	}

	@Transactional
	@Override
	public List<FAQ> getUserQuestion(int userId) {
		// TODO Auto-generated method stub
		return faqRepository.findByUser(userId);
	}

	@Transactional
	@Override
	public FAQ getFAQ(int id) {
		return faqRepository.findById(id).get();
	}

}
