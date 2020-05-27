import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BiometricsSecurityPage } from './biometrics-security.page';

describe('BiometricsSecurityPage', () => {
  let component: BiometricsSecurityPage;
  let fixture: ComponentFixture<BiometricsSecurityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiometricsSecurityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BiometricsSecurityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
