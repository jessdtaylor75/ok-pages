import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuccessOcrverifyMcPage } from './success-ocrverify-mc.page';

describe('SuccessOcrverifyMcPage', () => {
  let component: SuccessOcrverifyMcPage;
  let fixture: ComponentFixture<SuccessOcrverifyMcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessOcrverifyMcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessOcrverifyMcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
