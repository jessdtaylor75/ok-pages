import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppBrowserSpnetPage } from './app-browser-spnet.page';

describe('AppBrowserSpnetPage', () => {
  let component: AppBrowserSpnetPage;
  let fixture: ComponentFixture<AppBrowserSpnetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBrowserSpnetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppBrowserSpnetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
