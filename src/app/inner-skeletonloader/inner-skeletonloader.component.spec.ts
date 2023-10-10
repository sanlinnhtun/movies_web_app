import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerSkeletonloaderComponent } from './inner-skeletonloader.component';

describe('InnerSkeletonloaderComponent', () => {
  let component: InnerSkeletonloaderComponent;
  let fixture: ComponentFixture<InnerSkeletonloaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnerSkeletonloaderComponent]
    });
    fixture = TestBed.createComponent(InnerSkeletonloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
