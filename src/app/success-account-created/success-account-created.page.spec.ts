import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuccessAccountCreatedPage } from './success-account-created.page';

describe('SuccessAccountCreatedPage', () => {
  let component: SuccessAccountCreatedPage;
  let fixture: ComponentFixture<SuccessAccountCreatedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessAccountCreatedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessAccountCreatedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
