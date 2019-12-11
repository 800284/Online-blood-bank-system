package com.cognizant.bloodbank.bloodservice.service;

import java.util.List;

import com.cognizant.bloodbank.bloodservice.model.FAQ;

public interface FAQService {
	public List<FAQ> getFAQsForDonor();

	public List<FAQ> getFAQsForAdmin();

	public void modifyFAQ(FAQ faq);

	public List<Integer> getNotification();

	public void postQuestion(FAQ faq);

	public List<FAQ> getUserQuestion(int userId);

	public FAQ getFAQ(int id);
}
