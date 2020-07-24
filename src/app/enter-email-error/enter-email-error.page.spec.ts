import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnterEmailErrorPage } from './enter-email-error.page';

describe('EnterEmailErrorPage', () => {
  let component: EnterEmailErrorPage;
  let fixture: ComponentFixture<EnterEmailErrorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterEmailErrorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnterEmailErrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
