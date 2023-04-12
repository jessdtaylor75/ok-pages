import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebPartner2Page } from './web-partner2.page';

describe('WebPartner2Page', () => {
  let component: WebPartner2Page;
  let fixture: ComponentFixture<WebPartner2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebPartner2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebPartner2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
