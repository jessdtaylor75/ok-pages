import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewHealthInfoPage } from './view-health-info.page';

describe('ViewHealthInfoPage', () => {
  let component: ViewHealthInfoPage;
  let fixture: ComponentFixture<ViewHealthInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHealthInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewHealthInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
