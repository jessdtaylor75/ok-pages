import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebPartner4Page } from './web-partner4.page';

describe('WebPartner4Page', () => {
  let component: WebPartner4Page;
  let fixture: ComponentFixture<WebPartner4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebPartner4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebPartner4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
