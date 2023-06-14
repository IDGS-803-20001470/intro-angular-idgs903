import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ievn2Component } from './ievn2.component';

describe('Ievn2Component', () => {
  let component: Ievn2Component;
  let fixture: ComponentFixture<Ievn2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ievn2Component]
    });
    fixture = TestBed.createComponent(Ievn2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
