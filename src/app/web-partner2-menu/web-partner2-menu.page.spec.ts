import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebPartner2MenuPage } from './web-partner2-menu.page';

describe('WebPartner2MenuPage', () => {
  let component: WebPartner2MenuPage;
  let fixture: ComponentFixture<WebPartner2MenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebPartner2MenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebPartner2MenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
