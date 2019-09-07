import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserDialogBoxComponent } from './new-user-dialog-box.component';

describe('NewUserDialogBoxComponent', () => {
  let component: NewUserDialogBoxComponent;
  let fixture: ComponentFixture<NewUserDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUserDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
