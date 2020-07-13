package com.angularwithspringboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.web.header.writers.ReferrerPolicyHeaderWriter.ReferrerPolicy;
import org.springframework.stereotype.Service;

import com.angularwithspringboot.model.Todos;
import com.angularwithspringboot.repository.TodoRepository;

@Service
public class TodoService {

	@Autowired
	TodoRepository repository;
	
	public List<Todos> getTodos() {
		return repository.findAll();
	}
	public Todos getTodoById(Long id) {
		return repository.findById(id).get();
	}
	public Todos updateTodo(Todos todo) {
		return repository.save(todo);
	}
	public Todos addTodo(Todos todo) {
		return repository.save(todo);
	}
	public void deleteTodo(Long id) {
		repository.deleteById(id);
	}
}
