import { Component, OnInit } from '@angular/core';
import { ApiService } from '../serveces/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public todoTitle: string = '';
  public todoDesc: string = '';
  public tasks: {title:string, description:string}[] = [];


  constructor(
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.tasks = JSON.parse(localStorage.getItem('tasks') || '');
  }

  addToList(){
    const task = {
      title: this.todoTitle,
      description: this.todoDesc,
    }
    this.tasks.push(task);
    this.api.addTodo(task).subscribe()
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  } 

}
