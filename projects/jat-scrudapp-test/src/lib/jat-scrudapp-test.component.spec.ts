import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JatSCRUDAppTestComponent } from './jat-scrudapp-test.component';

describe('JatSCRUDAppTestComponent', () => {
  let component: JatSCRUDAppTestComponent;
  let fixture: ComponentFixture<JatSCRUDAppTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JatSCRUDAppTestComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JatSCRUDAppTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
