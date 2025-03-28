import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BiometricsPage } from './biometrics.page';

describe('BiometricsPage', () => {
  let component: BiometricsPage;
  let fixture: ComponentFixture<BiometricsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiometricsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BiometricsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
