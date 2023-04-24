import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { McJoinPage } from './mc-join.page';

describe('McJoinPage', () => {
  let component: McJoinPage;
  let fixture: ComponentFixture<McJoinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McJoinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(McJoinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
