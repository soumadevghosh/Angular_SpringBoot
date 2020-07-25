import { Component, OnInit } from '@angular/core';
import { TodoDataService } from 'src/app/service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:number;
  todo:Todo;
  constructor(private service:TodoDataService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.todo=new Todo(null,'','',false,new Date());
    if(this.id!=-1){
      this.service.getTodo(this.id).subscribe(res=>{
        this.todo=res;
      });
    }
  }

  saveTodo(){
    if(this.id==-1){
      this.service.addTodo(this.todo).subscribe(response=>{
        this.router.navigate(['todos']);
      }); 
    }else{
      this.service.updateTodo(this.id,this.todo).subscribe(response=>{
        this.router.navigate(['todos']);
      });  
    }
    
  }
}
