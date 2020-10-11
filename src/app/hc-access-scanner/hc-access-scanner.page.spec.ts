import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HcAccessScannerPage } from './hc-access-scanner.page';

describe('HcAccessScannerPage', () => {
  let component: HcAccessScannerPage;
  let fixture: ComponentFixture<HcAccessScannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcAccessScannerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HcAccessScannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
