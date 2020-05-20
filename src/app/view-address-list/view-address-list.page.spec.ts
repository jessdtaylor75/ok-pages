import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewAddressListPage } from './view-address-list.page';

describe('ViewAddressListPage', () => {
  let component: ViewAddressListPage;
  let fixture: ComponentFixture<ViewAddressListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAddressListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewAddressListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
