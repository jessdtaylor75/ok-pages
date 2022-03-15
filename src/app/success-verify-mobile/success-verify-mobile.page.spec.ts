import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuccessVerifyMobilePage } from './success-verify-mobile.page';

describe('SuccessVerifyMobilePage', () => {
  let component: SuccessVerifyMobilePage;
  let fixture: ComponentFixture<SuccessVerifyMobilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessVerifyMobilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessVerifyMobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
