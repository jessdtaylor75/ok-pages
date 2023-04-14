import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OcrVerifyMcPage } from './ocr-verify-mc.page';

describe('OcrVerifyMcPage', () => {
  let component: OcrVerifyMcPage;
  let fixture: ComponentFixture<OcrVerifyMcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcrVerifyMcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OcrVerifyMcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
