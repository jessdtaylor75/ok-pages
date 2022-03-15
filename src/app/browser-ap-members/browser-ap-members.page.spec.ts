import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrowserApMembersPage } from './browser-ap-members.page';

describe('BrowserApMembersPage', () => {
  let component: BrowserApMembersPage;
  let fixture: ComponentFixture<BrowserApMembersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserApMembersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrowserApMembersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
