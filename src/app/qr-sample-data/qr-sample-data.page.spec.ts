import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QrSampleDataPage } from './qr-sample-data.page';

describe('QrSampleDataPage', () => {
  let component: QrSampleDataPage;
  let fixture: ComponentFixture<QrSampleDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrSampleDataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QrSampleDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
