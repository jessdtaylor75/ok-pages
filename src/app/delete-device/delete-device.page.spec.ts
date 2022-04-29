import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeleteDevicePage } from './delete-device.page';

describe('DeleteDevicePage', () => {
  let component: DeleteDevicePage;
  let fixture: ComponentFixture<DeleteDevicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDevicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteDevicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
