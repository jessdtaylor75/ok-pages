import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HcStatusNotCertifiedPage } from './hc-status-not-certified.page';

describe('HcStatusNotCertifiedPage', () => {
  let component: HcStatusNotCertifiedPage;
  let fixture: ComponentFixture<HcStatusNotCertifiedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcStatusNotCertifiedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HcStatusNotCertifiedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
