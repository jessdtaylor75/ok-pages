import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppStoreOpenPage } from './app-store-open.page';

describe('AppStoreOpenPage', () => {
  let component: AppStoreOpenPage;
  let fixture: ComponentFixture<AppStoreOpenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppStoreOpenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppStoreOpenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
