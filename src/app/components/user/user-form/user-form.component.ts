import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user: User = new User();
  @Output() onCreate: EventEmitter<User> = new EventEmitter<User>();

  onSubmitUserForm() {
    this.onCreate.emit(this.user);
  }

}
