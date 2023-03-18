import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouHistoryComponent } from './abou-history.component';

describe('AbouHistoryComponent', () => {
  let component: AbouHistoryComponent;
  let fixture: ComponentFixture<AbouHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbouHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbouHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
