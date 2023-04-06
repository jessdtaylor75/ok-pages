import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TmBrowserEasPage } from './tm-browser-eas.page';

describe('TmBrowserEasPage', () => {
  let component: TmBrowserEasPage;
  let fixture: ComponentFixture<TmBrowserEasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmBrowserEasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TmBrowserEasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
