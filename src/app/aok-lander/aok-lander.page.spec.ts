import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AokLanderPage } from './aok-lander.page';

describe('AokLanderPage', () => {
  let component: AokLanderPage;
  let fixture: ComponentFixture<AokLanderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AokLanderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AokLanderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
