import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebPartner2LoginMcPage } from './web-partner2-login-mc.page';

describe('WebPartner2LoginMcPage', () => {
  let component: WebPartner2LoginMcPage;
  let fixture: ComponentFixture<WebPartner2LoginMcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebPartner2LoginMcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebPartner2LoginMcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
