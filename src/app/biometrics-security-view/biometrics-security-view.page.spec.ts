import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BiometricsSecurityViewPage } from './biometrics-security-view.page';

describe('BiometricsSecurityViewPage', () => {
  let component: BiometricsSecurityViewPage;
  let fixture: ComponentFixture<BiometricsSecurityViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiometricsSecurityViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BiometricsSecurityViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
