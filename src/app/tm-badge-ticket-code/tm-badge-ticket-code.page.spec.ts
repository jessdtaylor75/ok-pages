import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TmBadgeTicketCodePage } from './tm-badge-ticket-code.page';

describe('TmBadgeTicketCodePage', () => {
  let component: TmBadgeTicketCodePage;
  let fixture: ComponentFixture<TmBadgeTicketCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmBadgeTicketCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TmBadgeTicketCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
