import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoEmployerPage } from './no-employer.page';

describe('NoEmployerPage', () => {
  let component: NoEmployerPage;
  let fixture: ComponentFixture<NoEmployerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoEmployerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoEmployerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
