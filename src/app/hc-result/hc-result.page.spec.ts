import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HcResultPage } from './hc-result.page';

describe('HcResultPage', () => {
  let component: HcResultPage;
  let fixture: ComponentFixture<HcResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HcResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
