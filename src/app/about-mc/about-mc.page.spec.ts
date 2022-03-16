import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutMcPage } from './about-mc.page';

describe('AboutMcPage', () => {
  let component: AboutMcPage;
  let fixture: ComponentFixture<AboutMcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutMcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
