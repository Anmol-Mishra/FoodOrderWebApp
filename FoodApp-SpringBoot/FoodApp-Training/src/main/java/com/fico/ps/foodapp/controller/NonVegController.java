package com.fico.ps.foodapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.fico.ps.foodapp.service.NonVegService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class NonVegController {
	
	@Autowired
	NonVegService nonVegService;
	
	@RequestMapping(value = "/nonvegmenu", method = RequestMethod.GET)
	public ResponseEntity<Object> getAllItemsOnNonVegMenu() {
		
		return new ResponseEntity<>(nonVegService.getAllItemsOnNonVegMenu(), HttpStatus.OK);
	}
	
	

}
