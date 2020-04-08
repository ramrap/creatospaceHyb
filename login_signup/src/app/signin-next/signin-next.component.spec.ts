import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninNextComponent } from './signin-next.component';

describe('SigninNextComponent', () => {
  let component: SigninNextComponent;
  let fixture: ComponentFixture<SigninNextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninNextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
