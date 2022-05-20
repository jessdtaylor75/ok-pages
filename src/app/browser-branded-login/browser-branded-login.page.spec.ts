import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrowserBrandedLoginPage } from './browser-branded-login.page';

describe('BrowserBrandedLoginPage', () => {
  let component: BrowserBrandedLoginPage;
  let fixture: ComponentFixture<BrowserBrandedLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserBrandedLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrowserBrandedLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
