import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewHcStatusPage } from './view-hc-status.page';

describe('ViewHcStatusPage', () => {
  let component: ViewHcStatusPage;
  let fixture: ComponentFixture<ViewHcStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHcStatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewHcStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
