import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCadastradoComponent } from './item-cadastrado.component';

describe('ItemCadastradoComponent', () => {
  let component: ItemCadastradoComponent;
  let fixture: ComponentFixture<ItemCadastradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCadastradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCadastradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
