import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BadgeDeviceAddPage } from './badge-device-add.page';

describe('BadgeDeviceAddPage', () => {
  let component: BadgeDeviceAddPage;
  let fixture: ComponentFixture<BadgeDeviceAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeDeviceAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeDeviceAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
