import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarComponent } from './similar.component';

describe('SimilarComponent', () => {
  let component: SimilarComponent;
  let fixture: ComponentFixture<SimilarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimilarComponent]
    });
    fixture = TestBed.createComponent(SimilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
