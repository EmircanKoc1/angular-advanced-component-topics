import { AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-example2',
  standalone: true,
  imports: [],
  templateUrl: './example2.component.html',
  styleUrl: './example2.component.scss'
})
export class Example2Component
  implements AfterViewInit {

  @ViewChild("div1", {
    read: ViewContainerRef,
    static: true
  }) div1Ref!: ViewContainerRef;

  @ViewChild("template1", {
    read: TemplateRef,
    static: true
  }) template1Ref!: TemplateRef<any>;



  @ViewChild("template2", {
    read: TemplateRef,
    static: true
  }) template2Ref!: TemplateRef<any>;

  ngAfterViewInit(): void {

    this.div1Ref.createEmbeddedView(this.template1Ref);
    this.div1Ref.createEmbeddedView(this.template2Ref);

  }

}
