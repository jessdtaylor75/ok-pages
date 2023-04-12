import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebPartner2LoginTextPage } from './web-partner2-login-text.page';

describe('WebPartner2LoginTextPage', () => {
  let component: WebPartner2LoginTextPage;
  let fixture: ComponentFixture<WebPartner2LoginTextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebPartner2LoginTextPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebPartner2LoginTextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
