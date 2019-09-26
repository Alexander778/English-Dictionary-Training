import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWordDialogComponent } from './edit-word-dialog.component';

describe('EditWordDialogComponent', () => {
  let component: EditWordDialogComponent;
  let fixture: ComponentFixture<EditWordDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWordDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
