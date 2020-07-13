package com.angularwithspringboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.angularwithspringboot.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByName(String username);

//	User findByName(String username);

}
