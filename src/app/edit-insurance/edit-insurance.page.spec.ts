import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditInsurancePage } from './edit-insurance.page';

describe('EditInsurancePage', () => {
  let component: EditInsurancePage;
  let fixture: ComponentFixture<EditInsurancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInsurancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditInsurancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
