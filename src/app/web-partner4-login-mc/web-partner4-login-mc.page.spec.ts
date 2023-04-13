import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebPartner4LoginMcPage } from './web-partner4-login-mc.page';

describe('WebPartner4LoginMcPage', () => {
  let component: WebPartner4LoginMcPage;
  let fixture: ComponentFixture<WebPartner4LoginMcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebPartner4LoginMcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebPartner4LoginMcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
