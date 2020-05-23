import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HcStatusC19positivePage } from './hc-status-c19positive.page';

describe('HcStatusC19positivePage', () => {
  let component: HcStatusC19positivePage;
  let fixture: ComponentFixture<HcStatusC19positivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcStatusC19positivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HcStatusC19positivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
