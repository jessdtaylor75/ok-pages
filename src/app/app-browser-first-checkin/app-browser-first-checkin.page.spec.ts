import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppBrowserFirstCheckinPage } from './app-browser-first-checkin.page';

describe('AppBrowserFirstCheckinPage', () => {
  let component: AppBrowserFirstCheckinPage;
  let fixture: ComponentFixture<AppBrowserFirstCheckinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBrowserFirstCheckinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppBrowserFirstCheckinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
