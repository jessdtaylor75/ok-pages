import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EasSafetypassBadgePage } from './eas-safetypass-badge.page';

describe('EasSafetypassBadgePage', () => {
  let component: EasSafetypassBadgePage;
  let fixture: ComponentFixture<EasSafetypassBadgePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasSafetypassBadgePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EasSafetypassBadgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
