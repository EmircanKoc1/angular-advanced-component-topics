import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  private _message: string = "default message";

  set message(value: string) {
    this._message = value;
  }

  get message(): string {
    return this._message;
  }
}
