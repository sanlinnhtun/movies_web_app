import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterSkeletonloaderComponent } from './outer-skeletonloader.component';

describe('OuterSkeletonloaderComponent', () => {
  let component: OuterSkeletonloaderComponent;
  let fixture: ComponentFixture<OuterSkeletonloaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OuterSkeletonloaderComponent]
    });
    fixture = TestBed.createComponent(OuterSkeletonloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
