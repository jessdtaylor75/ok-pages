import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScanDeviceAddMcPage } from './scan-device-add-mc.page';

describe('ScanDeviceAddMcPage', () => {
  let component: ScanDeviceAddMcPage;
  let fixture: ComponentFixture<ScanDeviceAddMcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanDeviceAddMcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScanDeviceAddMcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
