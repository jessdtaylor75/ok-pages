import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { McPreboardOcrPage } from './mc-preboard-ocr.page';

describe('McPreboardOcrPage', () => {
  let component: McPreboardOcrPage;
  let fixture: ComponentFixture<McPreboardOcrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McPreboardOcrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(McPreboardOcrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
