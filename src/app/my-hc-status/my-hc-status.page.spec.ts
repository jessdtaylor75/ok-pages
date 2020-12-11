import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyHcStatusPage } from './my-hc-status.page';

describe('MyHcStatusPage', () => {
  let component: MyHcStatusPage;
  let fixture: ComponentFixture<MyHcStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHcStatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyHcStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
