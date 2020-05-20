import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewIdPage } from './view-id.page';

describe('ViewIdPage', () => {
  let component: ViewIdPage;
  let fixture: ComponentFixture<ViewIdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewIdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
