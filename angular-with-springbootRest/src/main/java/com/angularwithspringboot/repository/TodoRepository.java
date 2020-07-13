package com.angularwithspringboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.angularwithspringboot.model.Todos;

@Repository
public interface TodoRepository extends JpaRepository<Todos, Long> {

}
