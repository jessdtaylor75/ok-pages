import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Hii5LanderPage } from './hii5-lander.page';

describe('Hii5LanderPage', () => {
  let component: Hii5LanderPage;
  let fixture: ComponentFixture<Hii5LanderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hii5LanderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Hii5LanderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
