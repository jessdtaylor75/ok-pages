import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChannelListPage } from './channel-list.page';

describe('ChannelListPage', () => {
  let component: ChannelListPage;
  let fixture: ComponentFixture<ChannelListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChannelListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
