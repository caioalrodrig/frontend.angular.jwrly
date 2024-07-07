import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDetalheComponent } from './tab-detalhe.component';

describe('TabDetalheComponent', () => {
  let component: TabDetalheComponent;
  let fixture: ComponentFixture<TabDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabDetalheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
