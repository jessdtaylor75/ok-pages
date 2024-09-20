import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OkBottomSheetPage } from './ok-bottom-sheet.page';

describe('OkBottomSheetPage', () => {
  let component: OkBottomSheetPage;
  let fixture: ComponentFixture<OkBottomSheetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkBottomSheetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OkBottomSheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
