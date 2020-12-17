import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConnectHcTestPage } from './connect-hc-test.page';

describe('ConnectHcTestPage', () => {
  let component: ConnectHcTestPage;
  let fixture: ComponentFixture<ConnectHcTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectHcTestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConnectHcTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
