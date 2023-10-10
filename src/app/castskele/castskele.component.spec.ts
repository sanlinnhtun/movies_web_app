import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastskeleComponent } from './castskele.component';

describe('CastskeleComponent', () => {
  let component: CastskeleComponent;
  let fixture: ComponentFixture<CastskeleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CastskeleComponent]
    });
    fixture = TestBed.createComponent(CastskeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
