import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HcStatusUnknownPage } from './hc-status-unknown.page';

describe('HcStatusUnknownPage', () => {
  let component: HcStatusUnknownPage;
  let fixture: ComponentFixture<HcStatusUnknownPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcStatusUnknownPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HcStatusUnknownPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
