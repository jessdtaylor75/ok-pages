import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HcStatusPendingPage } from './hc-status-pending.page';

describe('HcStatusPendingPage', () => {
  let component: HcStatusPendingPage;
  let fixture: ComponentFixture<HcStatusPendingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcStatusPendingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HcStatusPendingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
