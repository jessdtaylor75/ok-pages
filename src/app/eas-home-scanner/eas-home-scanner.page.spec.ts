import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EasHomeScannerPage } from './eas-home-scanner.page';

describe('EasHomeScannerPage', () => {
  let component: EasHomeScannerPage;
  let fixture: ComponentFixture<EasHomeScannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasHomeScannerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EasHomeScannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
