import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConnectedAccountsPage } from './connected-accounts.page';

describe('ConnectedAccountsPage', () => {
  let component: ConnectedAccountsPage;
  let fixture: ComponentFixture<ConnectedAccountsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectedAccountsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConnectedAccountsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
