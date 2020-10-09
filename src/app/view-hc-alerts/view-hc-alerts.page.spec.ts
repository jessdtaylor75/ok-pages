import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewHcAlertsPage } from './view-hc-alerts.page';

describe('ViewHcAlertsPage', () => {
  let component: ViewHcAlertsPage;
  let fixture: ComponentFixture<ViewHcAlertsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHcAlertsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewHcAlertsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
