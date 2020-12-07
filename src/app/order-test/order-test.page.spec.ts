import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderTestPage } from './order-test.page';

describe('OrderTestPage', () => {
  let component: OrderTestPage;
  let fixture: ComponentFixture<OrderTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderTestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
