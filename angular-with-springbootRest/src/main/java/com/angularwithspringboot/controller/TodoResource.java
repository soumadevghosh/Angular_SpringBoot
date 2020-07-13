package com.angularwithspringboot.controller;
import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.angularwithspringboot.model.Todos;
import com.angularwithspringboot.service.TodoHardcodedService;
import com.angularwithspringboot.service.TodoService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/users")
public class TodoResource {
	
//	@Autowired
//	private TodoHardcodedService todoService;
	
	@Autowired
	private TodoService service;
	
	@GetMapping("/todos")
	public List<Todos> getTodos(){
		return service.getTodos();
	}
//	@GetMapping("/todos")
//	public List<Todos> getAllTodos(){
//		return todoService.findAll();
//	}
	
	@GetMapping("/todos/{id}")
	public Todos getTodosById(@PathVariable("id") Long id) {
		return service.getTodoById(id);
	}
//	@GetMapping("/todos/{id}")
//	public Todos getTodo(@PathVariable long id){
//		return todoService.findById(id);
//	}

	@DeleteMapping("/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable("id") Long id){
		service.deleteTodo(id);
		return ResponseEntity.noContent().build();
	}
//	@DeleteMapping("/todos/{id}")
//	public ResponseEntity<Void> deleteTodo(@PathVariable long id){
//		
//		Todos todo = todoService.deleteById(id);
//		
//		if(todo!=null) {
//			return ResponseEntity.noContent().build();
//		}
//		
//		return ResponseEntity.notFound().build();
//	}
	
	@PutMapping("/todos")
	public ResponseEntity<Todos> updateTodo(@RequestBody Todos todo){
		todo.setUsername("Souma");
		Todos updated = service.updateTodo(todo);
		return new ResponseEntity<Todos>(updated, HttpStatus.OK);
	}
//	//Edit/Update a Todo
//	@PutMapping("/todos/{id}")
//	public ResponseEntity<Todos> updateTodo(
//			@PathVariable long id, @RequestBody Todos todo){
//		
//		Todos todoUpdated = todoService.save(todo);
//		
//		return new ResponseEntity<Todos>(todo, HttpStatus.OK);
//	}

	@PostMapping("/todos")
	public ResponseEntity<Void> addTodo(@RequestBody Todos todo){
		todo.setUsername("Souma");
		Todos created = service.addTodo(todo);
		//Location
		//Get current resource url
		///{id}
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(created.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
//	@PostMapping("/todos")
//	public ResponseEntity<Void> addTodo(@RequestBody Todos todo){
//		
//		Todos createdTodo = todoService.save(todo);
//		
//		//Location
//		//Get current resource url
//		///{id}
//		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
//				.path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
//		
//		return ResponseEntity.created(uri).build();
//	}
}