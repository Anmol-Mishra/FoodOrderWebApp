package com.fico.ps.foodapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fico.ps.foodapp.model.User;
import com.fico.ps.foodapp.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepo;
	public boolean checkIfPhoneNumberExists(String phn) {
		return userRepo.existsByPhonenumber(phn);
	}

	public User findByPhonenumber(String phn) {
		return userRepo.findByPhonenumber(phn);
		
	}

	public void saveUser(User user) {

		userRepo.save(user);
		
	}
	

}
