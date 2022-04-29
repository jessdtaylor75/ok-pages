import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyServiceMcPage } from './verify-service-mc.page';

describe('VerifyServiceMcPage', () => {
  let component: VerifyServiceMcPage;
  let fixture: ComponentFixture<VerifyServiceMcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyServiceMcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyServiceMcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
