import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppBrowserRestmenuPage } from './app-browser-restmenu.page';

describe('AppBrowserRestmenuPage', () => {
  let component: AppBrowserRestmenuPage;
  let fixture: ComponentFixture<AppBrowserRestmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBrowserRestmenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppBrowserRestmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
