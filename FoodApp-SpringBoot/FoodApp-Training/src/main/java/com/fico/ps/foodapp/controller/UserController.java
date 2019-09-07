package com.fico.ps.foodapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fico.ps.foodapp.exception.UserIsNotRegisteredException;
import com.fico.ps.foodapp.model.User;
import com.fico.ps.foodapp.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	@Autowired
	UserService userService;
	
	@RequestMapping(value = "/checkIfRegisteredUser", method = RequestMethod.POST)
	public ResponseEntity<Object> chechIfTheUserIsRegistered(@RequestBody String phn)
	{
		//System.out.println(phn);
		
		if(userService.checkIfPhoneNumberExists(phn))//userService.findByPhonenumber(phn).getUsername()
			return new ResponseEntity<>(userService.findByPhonenumber(phn),HttpStatus.OK);
		else
			throw new UserIsNotRegisteredException();
	}
	
	
	
	@RequestMapping(value = "/registerUser", method = RequestMethod.POST)
	public ResponseEntity<Object> saveUser(@RequestBody User user){
		userService.saveUser(user);
		return new ResponseEntity<>(user, HttpStatus.OK);
		//return new ResponseEntity<>("The user is registered successfully.", HttpStatus.OK);
	}
}
