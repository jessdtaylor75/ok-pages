import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuccessVerifyEmailPage } from './success-verify-email.page';

describe('SuccessVerifyEmailPage', () => {
  let component: SuccessVerifyEmailPage;
  let fixture: ComponentFixture<SuccessVerifyEmailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessVerifyEmailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessVerifyEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
