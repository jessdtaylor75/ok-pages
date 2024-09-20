import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Hii5ReviewVideoPage } from './hii5-review-video.page';

describe('Hii5ReviewVideoPage', () => {
  let component: Hii5ReviewVideoPage;
  let fixture: ComponentFixture<Hii5ReviewVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hii5ReviewVideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Hii5ReviewVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
