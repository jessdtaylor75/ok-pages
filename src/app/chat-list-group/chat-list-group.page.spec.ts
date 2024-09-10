import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatListGroupPage } from './chat-list-group.page';

describe('ChatListGroupPage', () => {
  let component: ChatListGroupPage;
  let fixture: ComponentFixture<ChatListGroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatListGroupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatListGroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
