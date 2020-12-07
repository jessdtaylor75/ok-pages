import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestLocationPage } from './test-location.page';

describe('TestLocationPage', () => {
  let component: TestLocationPage;
  let fixture: ComponentFixture<TestLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
