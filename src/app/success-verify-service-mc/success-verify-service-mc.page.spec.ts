import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuccessVerifyServiceMcPage } from './success-verify-service-mc.page';

describe('SuccessVerifyServiceMcPage', () => {
  let component: SuccessVerifyServiceMcPage;
  let fixture: ComponentFixture<SuccessVerifyServiceMcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessVerifyServiceMcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessVerifyServiceMcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
