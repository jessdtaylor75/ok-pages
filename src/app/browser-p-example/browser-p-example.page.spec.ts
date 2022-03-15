import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrowserPExamplePage } from './browser-p-example.page';

describe('BrowserPExamplePage', () => {
  let component: BrowserPExamplePage;
  let fixture: ComponentFixture<BrowserPExamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserPExamplePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrowserPExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
