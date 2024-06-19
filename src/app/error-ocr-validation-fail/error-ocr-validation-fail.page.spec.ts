import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ErrorOcrValidationFailPage } from './error-ocr-validation-fail.page';

describe('ErrorOcrValidationFailPage', () => {
  let component: ErrorOcrValidationFailPage;
  let fixture: ComponentFixture<ErrorOcrValidationFailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorOcrValidationFailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorOcrValidationFailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
