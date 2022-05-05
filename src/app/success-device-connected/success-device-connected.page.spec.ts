import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuccessDeviceConnectedPage } from './success-device-connected.page';

describe('SuccessDeviceConnectedPage', () => {
  let component: SuccessDeviceConnectedPage;
  let fixture: ComponentFixture<SuccessDeviceConnectedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessDeviceConnectedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessDeviceConnectedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
