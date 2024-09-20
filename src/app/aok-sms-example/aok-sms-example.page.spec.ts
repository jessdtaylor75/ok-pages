import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AokSmsExamplePage } from './aok-sms-example.page';

describe('AokSmsExamplePage', () => {
  let component: AokSmsExamplePage;
  let fixture: ComponentFixture<AokSmsExamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AokSmsExamplePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AokSmsExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
