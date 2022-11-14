import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThriftMainBoardComponent } from './thrift-main-board.component';

describe('ThriftMainBoardComponent', () => {
  let component: ThriftMainBoardComponent;
  let fixture: ComponentFixture<ThriftMainBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThriftMainBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThriftMainBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
