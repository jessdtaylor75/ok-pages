import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrowserEasPage } from './browser-eas.page';

describe('BrowserEasPage', () => {
  let component: BrowserEasPage;
  let fixture: ComponentFixture<BrowserEasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserEasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrowserEasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
