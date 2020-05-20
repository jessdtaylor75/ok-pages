import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewPersonalInfoPage } from './view-personal-info.page';

describe('ViewPersonalInfoPage', () => {
  let component: ViewPersonalInfoPage;
  let fixture: ComponentFixture<ViewPersonalInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPersonalInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewPersonalInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
