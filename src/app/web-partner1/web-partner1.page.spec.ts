import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebPartner1Page } from './web-partner1.page';

describe('WebPartner1Page', () => {
  let component: WebPartner1Page;
  let fixture: ComponentFixture<WebPartner1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebPartner1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebPartner1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
