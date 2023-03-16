import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { CharactersComponent } from './characters.component';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;

  const mockActivatedRoute = {
    snapshot: {
      paramMap: of({ id: 123 })
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersComponent ],
      providers:[
        {
          provide: ActivatedRoute,
          useValue: mockActivatedRoute
        }
      ],
      imports: [HttpClientModule , FormsModule] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
