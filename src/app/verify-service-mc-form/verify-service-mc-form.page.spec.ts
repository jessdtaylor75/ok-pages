import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyServiceMcFormPage } from './verify-service-mc-form.page';

describe('VerifyServiceMcFormPage', () => {
  let component: VerifyServiceMcFormPage;
  let fixture: ComponentFixture<VerifyServiceMcFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyServiceMcFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyServiceMcFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
