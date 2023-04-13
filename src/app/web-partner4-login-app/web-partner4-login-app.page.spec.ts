import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebPartner4LoginAppPage } from './web-partner4-login-app.page';

describe('WebPartner4LoginAppPage', () => {
  let component: WebPartner4LoginAppPage;
  let fixture: ComponentFixture<WebPartner4LoginAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebPartner4LoginAppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebPartner4LoginAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
