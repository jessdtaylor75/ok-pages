import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeScannerFirstUsePage } from './home-scanner-first-use.page';

describe('HomeScannerFirstUsePage', () => {
  let component: HomeScannerFirstUsePage;
  let fixture: ComponentFixture<HomeScannerFirstUsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeScannerFirstUsePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeScannerFirstUsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
