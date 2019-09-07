package com.fico.ps.foodapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fico.ps.foodapp.model.NonVegMenu;

import com.fico.ps.foodapp.repository.NonVegRepository;

@Service
public class NonVegService {
	
	@Autowired
	NonVegRepository nonVegRepo;

	public List<NonVegMenu> getAllItemsOnNonVegMenu() {

		return (List<NonVegMenu>)nonVegRepo.findAll();
	}


	
}
