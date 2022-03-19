import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrowserApDesktopLoginPage } from './browser-ap-desktop-login.page';

describe('BrowserApDesktopLoginPage', () => {
  let component: BrowserApDesktopLoginPage;
  let fixture: ComponentFixture<BrowserApDesktopLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserApDesktopLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrowserApDesktopLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
