import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebPartner2McprogramPage } from './web-partner2-mcprogram.page';

describe('WebPartner2McprogramPage', () => {
  let component: WebPartner2McprogramPage;
  let fixture: ComponentFixture<WebPartner2McprogramPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebPartner2McprogramPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebPartner2McprogramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
