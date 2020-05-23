import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestStatusPage } from './request-status.page';

describe('RequestStatusPage', () => {
  let component: RequestStatusPage;
  let fixture: ComponentFixture<RequestStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestStatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
