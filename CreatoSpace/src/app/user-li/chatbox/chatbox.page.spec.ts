import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatboxPage } from './chatbox.page';

describe('ChatboxPage', () => {
  let component: ChatboxPage;
  let fixture: ComponentFixture<ChatboxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatboxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
