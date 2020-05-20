import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewAddressPage } from './view-address.page';

describe('ViewAddressPage', () => {
  let component: ViewAddressPage;
  let fixture: ComponentFixture<ViewAddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAddressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
