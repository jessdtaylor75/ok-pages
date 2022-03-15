import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrowserMildealsPage } from './browser-mildeals.page';

describe('BrowserMildealsPage', () => {
  let component: BrowserMildealsPage;
  let fixture: ComponentFixture<BrowserMildealsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserMildealsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrowserMildealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
