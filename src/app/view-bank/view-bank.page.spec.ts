import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewBankPage } from './view-bank.page';

describe('ViewBankPage', () => {
  let component: ViewBankPage;
  let fixture: ComponentFixture<ViewBankPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBankPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewBankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
