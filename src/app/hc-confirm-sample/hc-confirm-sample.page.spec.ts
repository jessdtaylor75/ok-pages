import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HcConfirmSamplePage } from './hc-confirm-sample.page';

describe('HcConfirmSamplePage', () => {
  let component: HcConfirmSamplePage;
  let fixture: ComponentFixture<HcConfirmSamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcConfirmSamplePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HcConfirmSamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
