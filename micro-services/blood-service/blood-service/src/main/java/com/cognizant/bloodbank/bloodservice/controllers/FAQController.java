package com.cognizant.bloodbank.bloodservice.controllers;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

import com.cognizant.bloodbank.bloodservice.model.FAQ;
import com.cognizant.bloodbank.bloodservice.model.User;
import com.cognizant.bloodbank.bloodservice.repository.UserRepository;
import com.cognizant.bloodbank.bloodservice.security.AppUserDetailsService;
import com.cognizant.bloodbank.bloodservice.service.FAQService;

@RestController
@RequestMapping("/blood-bank/faq")
public class FAQController {
	private static final Logger LOGGER = LoggerFactory.getLogger(FAQController.class);
	List<String> userList = new ArrayList<String>();
	@Autowired
	FAQService faqService;
	@Autowired
	AppUserDetailsService appUserDetailsService;
	@Autowired
	UserRepository userRepository;

	@GetMapping
	public List<FAQ> getFAQs() {
		LOGGER.info("START");
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String user = authentication.getName();
		LOGGER.info("user : {}", user);
		if (!user.equals("anonymousUser")) {
			UserDetails userDetails = appUserDetailsService.loadUserByUsername(user);
			String role = userDetails.getAuthorities().toArray()[0].toString();
			LOGGER.info("role : {}", role);

			if (role.equals("ADMIN")) {
				return faqService.getFAQsForAdmin();
			} else {
				return faqService.getFAQsForDonor();
			}

		}
		return faqService.getFAQsForDonor();

	}

	@PutMapping("/edit-question")
	public void answerFAQ(@RequestBody FAQ faq) {
		LOGGER.info("faq = " + faq.getUser());
		faqService.modifyFAQ(faq);

	}

	@GetMapping("/get-notified/{id}")
	public boolean getNotifited(@PathVariable int id) {
		if (faqService.getNotification().contains(id)) {

			return true;
		}
		return false;
	}

	@PostMapping("/{username}")
	public void postQuestion(@RequestBody FAQ faq, @PathVariable String username) {
		User user = userRepository.findByUsername(username);
		faq.setUser(user);
		faqService.postQuestion(faq);
	}

	@GetMapping("/get-question/{username}")
	public List<FAQ> getUserQuestion(@PathVariable String username) {
		int id = userRepository.findIdByUsername(username);
		return faqService.getUserQuestion(id);
	}

	@GetMapping("/{id}")
	public FAQ getFAQ(@PathVariable int id) {
		return faqService.getFAQ(id);
	}
}
