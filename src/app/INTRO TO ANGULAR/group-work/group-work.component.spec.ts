import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupWorkComponent } from './group-work.component';

describe('GroupWorkComponent', () => {
  let component: GroupWorkComponent;
  let fixture: ComponentFixture<GroupWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
