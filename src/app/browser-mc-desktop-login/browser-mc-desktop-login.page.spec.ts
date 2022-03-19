import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrowserMcDesktopLoginPage } from './browser-mc-desktop-login.page';

describe('BrowserMcDesktopLoginPage', () => {
  let component: BrowserMcDesktopLoginPage;
  let fixture: ComponentFixture<BrowserMcDesktopLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserMcDesktopLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrowserMcDesktopLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
