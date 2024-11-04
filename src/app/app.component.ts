import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./ng-content/card/card.component";
import { CommonModule } from '@angular/common';
import { SimpleComponentComponent } from './ng-container/simple-component/simple-component.component';
import { Example1Component } from "./ng-template/example1/example1.component";
import { OutletExample1Component } from "./ng-template-outlet/outlet-example1/outlet-example1.component";
import { ParentComponent as viewchild_ParenComponent } from "./viewchild/parent/parent.component";
import { ParentComponent as contentchild_ParentComponent } from './contentchild/parent/parent.component';
import { Example2Component } from './ng-template/example2/example2.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    CardComponent,
    CommonModule,
    SimpleComponentComponent,
    Example1Component,
    OutletExample1Component,
    viewchild_ParenComponent,
    contentchild_ParentComponent,
    Example2Component
  ]
})
export class AppComponent {
  title = 'angular-advanced-component-topics';
}
