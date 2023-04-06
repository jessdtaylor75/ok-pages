import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TmBadgeTicketPage } from './tm-badge-ticket.page';

describe('TmBadgeTicketPage', () => {
  let component: TmBadgeTicketPage;
  let fixture: ComponentFixture<TmBadgeTicketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmBadgeTicketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TmBadgeTicketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
