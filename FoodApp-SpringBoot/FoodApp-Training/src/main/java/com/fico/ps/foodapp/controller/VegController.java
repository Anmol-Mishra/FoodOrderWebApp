package com.fico.ps.foodapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.fico.ps.foodapp.model.VegMenu;
import com.fico.ps.foodapp.service.VegService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class VegController {
	
	@Autowired
	VegService vegService;
	
	@RequestMapping(value = "/vegmenu", method = RequestMethod.GET)
	public ResponseEntity<Object> getAllItemsOnVegMenu() {
		
		return new ResponseEntity<>(vegService.getAllItemsOnVegMenu(), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/vegmenu/additem", method = RequestMethod.POST)
	public ResponseEntity<Object> addNewVegItem(@RequestBody VegMenu vegFood)
	{
		vegService.addNewVegItem(vegFood);
		return new ResponseEntity<>("Successfully added in vegetarian food menu.", HttpStatus.OK);
	}
	
	
	
	
	

}
