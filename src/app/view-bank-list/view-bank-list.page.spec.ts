import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewBankListPage } from './view-bank-list.page';

describe('ViewBankListPage', () => {
  let component: ViewBankListPage;
  let fixture: ComponentFixture<ViewBankListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBankListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewBankListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
