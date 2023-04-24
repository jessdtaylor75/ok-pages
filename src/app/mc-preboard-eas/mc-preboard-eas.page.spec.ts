import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { McPreboardEasPage } from './mc-preboard-eas.page';

describe('McPreboardEasPage', () => {
  let component: McPreboardEasPage;
  let fixture: ComponentFixture<McPreboardEasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McPreboardEasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(McPreboardEasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
