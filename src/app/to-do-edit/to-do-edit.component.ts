import { Component, OnInit } from '@angular/core';
import { ITodo } from '../interfaces/itodo';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-to-do-edit',
  templateUrl: './to-do-edit.component.html',
  styleUrls: ['./to-do-edit.component.css']
})
export class ToDoEditComponent implements OnInit {

  todo: ITodo;
  modalInstance: NgbModalRef;
  newDescription = '';
  constructor() { }

  ngOnInit() {
  }

  save(): void {
    this.todo.description = this.newDescription;
    this.modalInstance.close(this.todo);
  }
}
