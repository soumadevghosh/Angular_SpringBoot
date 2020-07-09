package com.angularwithspringboot.service;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.angularwithspringboot.model.Todos;


@Service
public class TodoHardcodedService {
	
	private static List<Todos> todos = new ArrayList<>();
	private static int idCounter = 0;
	
	static {
		todos.add(new Todos(++idCounter, "in28minutes","Learn to Dance 2", new Date(), false ));
		todos.add(new Todos(++idCounter, "in28minutes","Learn about Microservices 2", new Date(), false ));
		todos.add(new Todos(++idCounter, "in28minutes","Learn about Angular", new Date(), false ));
	}
	
	public List<Todos> findAll() {
		return todos;
	}

	public Todos save(Todos todo) {
		if(todo.getId()==-1 || todo.getId()==0) {
			todo.setId(++idCounter);
			todos.add(todo);
		} else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}
	
	public Todos deleteById(long id) {
		Todos todo = findById(id);
		
		if(todo==null) return null;
		
		if(todos.remove(todo)) {
			return todo;
		}
		
		return null;
	}

	public Todos findById(long id) {
		for(Todos todo:todos) {
			if(todo.getId() == id) {
				return todo;
			}
		}
		
		return null;
	}
	
}