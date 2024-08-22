import { Component } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [ MatFormField, MatLabel, ReactiveFormsModule,
    MatButtonModule, MatInputModule, MatAutocompleteModule,
    MatIcon
   ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ){
    this.formulario = this.formBuilder.group({
      relogios: [null]
    });
  }

  onSubmit(){

  }

}
