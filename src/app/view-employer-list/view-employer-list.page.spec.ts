import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewEmployerListPage } from './view-employer-list.page';

describe('ViewEmployerListPage', () => {
  let component: ViewEmployerListPage;
  let fixture: ComponentFixture<ViewEmployerListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEmployerListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewEmployerListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
