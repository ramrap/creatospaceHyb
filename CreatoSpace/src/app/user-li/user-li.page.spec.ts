import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserLiPage } from './user-li.page';

describe('UserLiPage', () => {
  let component: UserLiPage;
  let fixture: ComponentFixture<UserLiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserLiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
