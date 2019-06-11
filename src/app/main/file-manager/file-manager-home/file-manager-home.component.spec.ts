import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileManagerHomeComponent } from './file-manager-home.component';

describe('FileManagerHomeComponent', () => {
  let component: FileManagerHomeComponent;
  let fixture: ComponentFixture<FileManagerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileManagerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileManagerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
