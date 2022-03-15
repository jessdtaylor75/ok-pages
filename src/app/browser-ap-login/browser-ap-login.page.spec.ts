import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrowserApLoginPage } from './browser-ap-login.page';

describe('BrowserApLoginPage', () => {
  let component: BrowserApLoginPage;
  let fixture: ComponentFixture<BrowserApLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserApLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrowserApLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
