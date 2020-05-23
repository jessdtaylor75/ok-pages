import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HcStatusRecoveredPage } from './hc-status-recovered.page';

describe('HcStatusRecoveredPage', () => {
  let component: HcStatusRecoveredPage;
  let fixture: ComponentFixture<HcStatusRecoveredPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcStatusRecoveredPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HcStatusRecoveredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
