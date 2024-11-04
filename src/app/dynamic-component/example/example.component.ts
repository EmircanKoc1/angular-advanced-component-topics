import { AfterViewInit, Component, ViewChild, viewChild, ViewContainerRef } from '@angular/core';
import { Component1Component } from '../component1/component1.component';
import { Component2Component } from '../component2/component2.component';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [
    Component1Component,
    Component2Component
  ],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent {

  @ViewChild("container", {
    read: ViewContainerRef,
    static: true
  }) containerRef!: ViewContainerRef;


  loadComponent1() {
    this.containerRef.clear();
    this.containerRef.createComponent(Component1Component);
  }

  loadComponent2() {
    this.containerRef.clear();
    this.containerRef.createComponent(Component2Component);
  }


}
