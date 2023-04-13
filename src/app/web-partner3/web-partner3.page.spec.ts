import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebPartner3Page } from './web-partner3.page';

describe('WebPartner3Page', () => {
  let component: WebPartner3Page;
  let fixture: ComponentFixture<WebPartner3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebPartner3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebPartner3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
