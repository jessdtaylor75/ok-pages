import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Hii5OptionsPage } from './hii5-options.page';

describe('Hii5OptionsPage', () => {
  let component: Hii5OptionsPage;
  let fixture: ComponentFixture<Hii5OptionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hii5OptionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Hii5OptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
