import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HcStatusClearPage } from './hc-status-clear.page';

describe('HcStatusClearPage', () => {
  let component: HcStatusClearPage;
  let fixture: ComponentFixture<HcStatusClearPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcStatusClearPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HcStatusClearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
