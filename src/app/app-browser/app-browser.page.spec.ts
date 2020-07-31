import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppBrowserPage } from './app-browser.page';

describe('AppBrowserPage', () => {
  let component: AppBrowserPage;
  let fixture: ComponentFixture<AppBrowserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBrowserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppBrowserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
