import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EasProfileHomePage } from './eas-profile-home.page';

describe('EasProfileHomePage', () => {
  let component: EasProfileHomePage;
  let fixture: ComponentFixture<EasProfileHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasProfileHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EasProfileHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
