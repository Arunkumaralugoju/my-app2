import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArunkumarComponent } from './arunkumar.component';

describe('ArunkumarComponent', () => {
  let component: ArunkumarComponent;
  let fixture: ComponentFixture<ArunkumarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArunkumarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArunkumarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
