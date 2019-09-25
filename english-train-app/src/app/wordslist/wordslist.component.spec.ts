import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordslistComponent } from './wordslist.component';

describe('WordslistComponent', () => {
  let component: WordslistComponent;
  let fixture: ComponentFixture<WordslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
