import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PassesModalPage } from './passes-modal.page';

describe('PassesModalPage', () => {
  let component: PassesModalPage;
  let fixture: ComponentFixture<PassesModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassesModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PassesModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
