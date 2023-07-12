import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsFormComponent } from './parts-form.component';

describe('PartsFormComponent', () => {
  let component: PartsFormComponent;
  let fixture: ComponentFixture<PartsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PartsFormComponent]
    });
    fixture = TestBed.createComponent(PartsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
