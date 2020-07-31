import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppEmailClientVerifyPage } from './app-email-client-verify.page';

describe('AppEmailClientVerifyPage', () => {
  let component: AppEmailClientVerifyPage;
  let fixture: ComponentFixture<AppEmailClientVerifyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppEmailClientVerifyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppEmailClientVerifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
