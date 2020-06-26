import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSpecificListComponent } from './user-specific-list.component';

describe('UserSpecificListComponent', () => {
  let component: UserSpecificListComponent;
  let fixture: ComponentFixture<UserSpecificListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSpecificListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSpecificListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
