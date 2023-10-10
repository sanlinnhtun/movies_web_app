import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterElementComponent } from './footer-element.component';

describe('FooterElementComponent', () => {
  let component: FooterElementComponent;
  let fixture: ComponentFixture<FooterElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterElementComponent]
    });
    fixture = TestBed.createComponent(FooterElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
