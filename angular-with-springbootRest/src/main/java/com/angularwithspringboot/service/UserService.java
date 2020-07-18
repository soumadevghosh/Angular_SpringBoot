package com.angularwithspringboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.angularwithspringboot.model.User;
import com.angularwithspringboot.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;
	
	public User findByUserName(String username) {
		return repository.findByName(username);
	}
}
