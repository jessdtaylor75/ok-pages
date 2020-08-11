import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewCheckInsPage } from './view-check-ins.page';

describe('ViewCheckInsPage', () => {
  let component: ViewCheckInsPage;
  let fixture: ComponentFixture<ViewCheckInsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCheckInsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewCheckInsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
