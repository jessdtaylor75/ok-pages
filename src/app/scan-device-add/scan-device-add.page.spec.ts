import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScanDeviceAddPage } from './scan-device-add.page';

describe('ScanDeviceAddPage', () => {
  let component: ScanDeviceAddPage;
  let fixture: ComponentFixture<ScanDeviceAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanDeviceAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScanDeviceAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
