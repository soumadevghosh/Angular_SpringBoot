import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor( public id:number,
      public username:string,
      public description:string,
      public isDone:boolean,
      public targetDate:Date){}
       
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  // todos=[                                                    //hard coded
  //   new Todo(1,'learn angular',false,new Date()),
  //   new Todo(2,'learn Spring Boot',false,new Date()),
  //   new Todo(3,'learn angular material',zzzzfalse,new Date())
  // ]
  todos:Todo[];
  message:string;
  constructor(private service:TodoDataService, private router:Router) { }

  ngOnInit(): void {
    this.refreshGrid();
  }
  refreshGrid(){
    this.service.getAllTodos().subscribe(response=>{
      this.todos=response;
      // console.log(response);
    })
  }
  deleteTodo(id:number){
    this.service.deleteTodo(id).subscribe(response=>{
      // console.log('success');
      this.message="Successfully deleted";
      this.refreshGrid();
    },error => {
      this.message="Failed to delete";
    })
  }
  updateTodo(id){
    this.router.navigate(['todo',id]);
  }
  addTodo(){
    this.router.navigate(['todo',-1]);
    
  }
}
