import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-outlet-example1',
  standalone: true,
  templateUrl: './outlet-example1.component.html',
  styleUrl: './outlet-example1.component.scss',
  imports: [NgTemplateOutlet],
})
export class OutletExample1Component {

}
