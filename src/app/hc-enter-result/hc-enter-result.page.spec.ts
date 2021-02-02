import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HcEnterResultPage } from './hc-enter-result.page';

describe('HcEnterResultPage', () => {
  let component: HcEnterResultPage;
  let fixture: ComponentFixture<HcEnterResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcEnterResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HcEnterResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
