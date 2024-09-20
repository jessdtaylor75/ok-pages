import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Hii5SmsExamplePage } from './hii5-sms-example.page';

describe('Hii5SmsExamplePage', () => {
  let component: Hii5SmsExamplePage;
  let fixture: ComponentFixture<Hii5SmsExamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hii5SmsExamplePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Hii5SmsExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
