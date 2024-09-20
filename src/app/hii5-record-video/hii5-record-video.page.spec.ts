import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Hii5RecordVideoPage } from './hii5-record-video.page';

describe('Hii5RecordVideoPage', () => {
  let component: Hii5RecordVideoPage;
  let fixture: ComponentFixture<Hii5RecordVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hii5RecordVideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Hii5RecordVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
