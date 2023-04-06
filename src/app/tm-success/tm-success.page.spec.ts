import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TmSuccessPage } from './tm-success.page';

describe('TmSuccessPage', () => {
  let component: TmSuccessPage;
  let fixture: ComponentFixture<TmSuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmSuccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TmSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
