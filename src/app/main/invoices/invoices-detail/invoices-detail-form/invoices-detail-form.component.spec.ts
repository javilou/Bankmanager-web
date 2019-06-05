import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesDetailFormComponent } from './invoices-detail-form.component';

describe('InvoicesDetailFormComponent', () => {
  let component: InvoicesDetailFormComponent;
  let fixture: ComponentFixture<InvoicesDetailFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicesDetailFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
