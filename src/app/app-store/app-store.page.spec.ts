import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppStorePage } from './app-store.page';

describe('AppStorePage', () => {
  let component: AppStorePage;
  let fixture: ComponentFixture<AppStorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppStorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppStorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
