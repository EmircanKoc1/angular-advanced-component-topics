import { Directive, ElementRef, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRedBackground]',
  standalone: true
})
export class RedBackgroundDirective {

  // constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  @HostBinding("style.backgroundColor")
  backgroundColor: string = "red";


  changeBackgroundColor(color: string) {
    this.backgroundColor = color;
    // this.backgroundColor = "pink";
    // this.renderer2.setStyle(this.elementRef.nativeElement, "backgroundColor", color);
  }


}
