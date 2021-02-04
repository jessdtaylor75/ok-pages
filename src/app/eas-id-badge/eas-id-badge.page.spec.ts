import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EasIdBadgePage } from './eas-id-badge.page';

describe('EasIdBadgePage', () => {
  let component: EasIdBadgePage;
  let fixture: ComponentFixture<EasIdBadgePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasIdBadgePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EasIdBadgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
