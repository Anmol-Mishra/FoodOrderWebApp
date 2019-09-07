package com.fico.ps.foodapp.repository;

import org.springframework.data.repository.CrudRepository;

import com.fico.ps.foodapp.model.User;

public interface UserRepository extends CrudRepository<User, Integer>{

	boolean existsByPhonenumber(String phn);

	User findByPhonenumber(String phn);
	

}
