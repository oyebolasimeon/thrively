import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThriftAnnounceModalComponent } from './thrift-announce-modal.component';

describe('ThriftAnnounceModalComponent', () => {
  let component: ThriftAnnounceModalComponent;
  let fixture: ComponentFixture<ThriftAnnounceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThriftAnnounceModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThriftAnnounceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
