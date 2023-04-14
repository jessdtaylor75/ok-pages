import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebPartner5Page } from './web-partner5.page';

describe('WebPartner5Page', () => {
  let component: WebPartner5Page;
  let fixture: ComponentFixture<WebPartner5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebPartner5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebPartner5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
