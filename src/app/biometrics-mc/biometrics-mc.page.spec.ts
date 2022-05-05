import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BiometricsMcPage } from './biometrics-mc.page';

describe('BiometricsMcPage', () => {
  let component: BiometricsMcPage;
  let fixture: ComponentFixture<BiometricsMcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiometricsMcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BiometricsMcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
