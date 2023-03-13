import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradegggComponent } from './gradeggg.component';

describe('GradegggComponent', () => {
  let component: GradegggComponent;
  let fixture: ComponentFixture<GradegggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradegggComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradegggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
