import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ErrorEmailInUsePage } from './error-email-in-use.page';

describe('ErrorEmailInUsePage', () => {
  let component: ErrorEmailInUsePage;
  let fixture: ComponentFixture<ErrorEmailInUsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorEmailInUsePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorEmailInUsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
