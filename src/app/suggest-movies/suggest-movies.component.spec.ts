import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestMoviesComponent } from './suggest-movies.component';

describe('SuggestMoviesComponent', () => {
  let component: SuggestMoviesComponent;
  let fixture: ComponentFixture<SuggestMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuggestMoviesComponent]
    });
    fixture = TestBed.createComponent(SuggestMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
