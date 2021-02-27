import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewIdentityPage } from './view-identity.page';

describe('ViewIdentityPage', () => {
  let component: ViewIdentityPage;
  let fixture: ComponentFixture<ViewIdentityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIdentityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewIdentityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
