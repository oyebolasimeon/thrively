import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThriflogsTableComponent } from './thriflogs-table.component';

describe('ThriflogsTableComponent', () => {
  let component: ThriflogsTableComponent;
  let fixture: ComponentFixture<ThriflogsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThriflogsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThriflogsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
