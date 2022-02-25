import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeScannerMilconnectPage } from './home-scanner-milconnect.page';

describe('HomeScannerMilconnectPage', () => {
  let component: HomeScannerMilconnectPage;
  let fixture: ComponentFixture<HomeScannerMilconnectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeScannerMilconnectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeScannerMilconnectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
