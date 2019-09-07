package com.fico.ps.foodapp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ExceptionController {

	@ExceptionHandler
	public ResponseEntity<Object> userIsNotRegistered(UserIsNotRegisteredException e)
	{
		return new ResponseEntity<>("The phone number is not registered. Kindly enter as new user.", HttpStatus.UNAUTHORIZED);
	}
}
