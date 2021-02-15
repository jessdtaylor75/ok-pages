import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RavenGetStartedPage } from './raven-get-started.page';

describe('RavenGetStartedPage', () => {
  let component: RavenGetStartedPage;
  let fixture: ComponentFixture<RavenGetStartedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RavenGetStartedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RavenGetStartedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
