import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuccessOcrverifyPage } from './success-ocrverify.page';

describe('SuccessOcrverifyPage', () => {
  let component: SuccessOcrverifyPage;
  let fixture: ComponentFixture<SuccessOcrverifyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessOcrverifyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessOcrverifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
