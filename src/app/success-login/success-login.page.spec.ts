import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuccessLoginPage } from './success-login.page';

describe('SuccessLoginPage', () => {
  let component: SuccessLoginPage;
  let fixture: ComponentFixture<SuccessLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
