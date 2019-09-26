import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablewordComponent } from './tableword.component';

describe('TablewordComponent', () => {
  let component: TablewordComponent;
  let fixture: ComponentFixture<TablewordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablewordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablewordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
