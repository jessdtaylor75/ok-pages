import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivateCardPage } from './activate-card.page';

describe('ActivateCardPage', () => {
  let component: ActivateCardPage;
  let fixture: ComponentFixture<ActivateCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivateCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
