import { AfterViewInit, Component, inject, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-example1',
  standalone: true,
  imports: [],
  templateUrl: './example1.component.html',
  styleUrl: './example1.component.scss'
})
export class Example1Component implements AfterViewInit {

  @ViewChild("template1", {
    read: TemplateRef,
    static: false
  }) template1!: TemplateRef<any>;

  constructor(private viewContainerRef: ViewContainerRef) {

  }
  ngAfterViewInit(): void {

    this.viewContainerRef.createEmbeddedView(this.template1);
  
  }


}
