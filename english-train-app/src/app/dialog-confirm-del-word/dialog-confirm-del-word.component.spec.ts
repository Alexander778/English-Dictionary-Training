import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmDelWordComponent } from './dialog-confirm-del-word.component';

describe('DialogConfirmDelWordComponent', () => {
  let component: DialogConfirmDelWordComponent;
  let fixture: ComponentFixture<DialogConfirmDelWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogConfirmDelWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogConfirmDelWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
