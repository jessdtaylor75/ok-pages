import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TmDestinationTicketSelectPage } from './tm-destination-ticket-select.page';

describe('TmDestinationTicketSelectPage', () => {
  let component: TmDestinationTicketSelectPage;
  let fixture: ComponentFixture<TmDestinationTicketSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmDestinationTicketSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TmDestinationTicketSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
