import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingUserDialogBoxComponent } from './existing-user-dialog-box.component';

describe('ExistingUserDialogBoxComponent', () => {
  let component: ExistingUserDialogBoxComponent;
  let fixture: ComponentFixture<ExistingUserDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingUserDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingUserDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
