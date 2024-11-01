import { AfterViewInit, Component, QueryList, ViewChild, viewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { RedBackgroundDirective } from '../red-background.directive';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, RedBackgroundDirective],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent
  implements AfterViewInit {

  @ViewChild("childComponent", {
    static: true,
    read: ChildComponent
  }) _childComponent!: ChildComponent;

  @ViewChildren("childComponent", {
    read: ChildComponent
  }) _childComponents!: QueryList<ChildComponent>;

  @ViewChild("childComponentWithDirective", {
    read: RedBackgroundDirective,
    static: false
  }) _backgroundDirectiveComponent!: RedBackgroundDirective;

  ngAfterViewInit(): void {
    console.log(this._childComponent.message);
  }

  setMessage(message: string): void {
    this._childComponent.message = message;

  }
  setMessages(message: string) {

    this._childComponents.forEach(component => {
      component.message = message;
    });
  }
  changeBackgroundColor(color: string) {
    this._backgroundDirectiveComponent.changeBackgroundColor(color);

  }




}
