import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebPartner2DestinationPage } from './web-partner2-destination.page';

describe('WebPartner2DestinationPage', () => {
  let component: WebPartner2DestinationPage;
  let fixture: ComponentFixture<WebPartner2DestinationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebPartner2DestinationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebPartner2DestinationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
