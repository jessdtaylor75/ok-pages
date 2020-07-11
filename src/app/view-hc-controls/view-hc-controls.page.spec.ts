import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewHcControlsPage } from './view-hc-controls.page';

describe('ViewHcControlsPage', () => {
  let component: ViewHcControlsPage;
  let fixture: ComponentFixture<ViewHcControlsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHcControlsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewHcControlsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
