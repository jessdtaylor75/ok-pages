import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppBrowserMapPage } from './app-browser-map.page';

describe('AppBrowserMapPage', () => {
  let component: AppBrowserMapPage;
  let fixture: ComponentFixture<AppBrowserMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBrowserMapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppBrowserMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
