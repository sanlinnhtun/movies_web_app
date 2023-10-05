import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavabarComponent } from './navabar.component';

describe('NavabarComponent', () => {
  let component: NavabarComponent;
  let fixture: ComponentFixture<NavabarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavabarComponent]
    });
    fixture = TestBed.createComponent(NavabarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
