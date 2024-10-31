import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletExample1Component } from './outlet-example1.component';

describe('OutletExample1Component', () => {
  let component: OutletExample1Component;
  let fixture: ComponentFixture<OutletExample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutletExample1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutletExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
