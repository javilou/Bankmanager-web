import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesHomeFormComponent } from './invoices-home-form.component';

describe('InvoicesHomeFormComponent', () => {
  let component: InvoicesHomeFormComponent;
  let fixture: ComponentFixture<InvoicesHomeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicesHomeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesHomeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
