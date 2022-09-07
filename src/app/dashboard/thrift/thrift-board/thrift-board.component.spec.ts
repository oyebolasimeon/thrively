import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThriftBoardComponent } from './thrift-board.component';

describe('ThriftBoardComponent', () => {
  let component: ThriftBoardComponent;
  let fixture: ComponentFixture<ThriftBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThriftBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThriftBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
