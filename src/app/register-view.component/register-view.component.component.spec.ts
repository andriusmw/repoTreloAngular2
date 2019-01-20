import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterView.ComponentComponent } from './register-view.component.component';

describe('RegisterView.ComponentComponent', () => {
  let component: RegisterView.ComponentComponent;
  let fixture: ComponentFixture<RegisterView.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterView.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterView.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
