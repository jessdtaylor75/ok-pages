import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeScannerPage } from './home-scanner.page';

describe('HomeScannerPage', () => {
  let component: HomeScannerPage;
  let fixture: ComponentFixture<HomeScannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeScannerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeScannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
