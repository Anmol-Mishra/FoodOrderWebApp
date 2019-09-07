package com.fico.ps.foodapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fico.ps.foodapp.model.VegMenu;
import com.fico.ps.foodapp.repository.VegRepository;

@Service
public class VegService {
	
	@Autowired
	VegRepository vegRepo;

	public List<VegMenu> getAllItemsOnVegMenu() {

		return (List<VegMenu>)vegRepo.findAll();
	}

	public void addNewVegItem(VegMenu vegFood) {
			
		vegRepo.save(vegFood);
	}



	
}
