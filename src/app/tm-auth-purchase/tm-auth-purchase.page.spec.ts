import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TmAuthPurchasePage } from './tm-auth-purchase.page';

describe('TmAuthPurchasePage', () => {
  let component: TmAuthPurchasePage;
  let fixture: ComponentFixture<TmAuthPurchasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmAuthPurchasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TmAuthPurchasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
