import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VaccineSuccessPage } from './vaccine-success.page';

describe('VaccineSuccessPage', () => {
  let component: VaccineSuccessPage;
  let fixture: ComponentFixture<VaccineSuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccineSuccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VaccineSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
