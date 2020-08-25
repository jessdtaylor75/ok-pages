import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirstOptionsPage } from './first-options.page';

describe('FirstOptionsPage', () => {
  let component: FirstOptionsPage;
  let fixture: ComponentFixture<FirstOptionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstOptionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstOptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
