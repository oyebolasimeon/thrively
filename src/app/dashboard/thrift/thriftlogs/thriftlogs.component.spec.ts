import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThriftlogsComponent } from './thriftlogs.component';

describe('ThriftlogsComponent', () => {
  let component: ThriftlogsComponent;
  let fixture: ComponentFixture<ThriftlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThriftlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThriftlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
