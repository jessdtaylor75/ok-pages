import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrowserBrandedDesktopLoginPage } from './browser-branded-desktop-login.page';

describe('BrowserBrandedDesktopLoginPage', () => {
  let component: BrowserBrandedDesktopLoginPage;
  let fixture: ComponentFixture<BrowserBrandedDesktopLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserBrandedDesktopLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrowserBrandedDesktopLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
