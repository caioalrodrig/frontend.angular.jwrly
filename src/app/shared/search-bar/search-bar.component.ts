import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatIcon } from '@angular/material/icon';
import { debounceTime, distinctUntilChanged, Observable, switchMap } from 'rxjs';
import { SearchBarService } from './search-bar.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule,
    MatFormField, MatLabel, MatButtonModule,
    MatInputModule, MatAutocompleteModule, MatIcon
   ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent implements OnInit{
  queryRelogio: string[] = [''];

  @Output() fieldSelected = new EventEmitter<string>();

  relogioQuery = new FormControl('');
  results$ = new Observable();

  constructor(
    private searchBarService: SearchBarService
  ){ }

  ngOnInit() {
    this.relogioQuery.valueChanges
      .pipe(
        debounceTime(100),
        distinctUntilChanged(),
        switchMap(value => this.searchBarService.getTitles({
          limit: 30,
          title: value
        }))
      )
      .subscribe( { next: res => this.queryRelogio = res } );
  }

  onSelection(fieldEvent: MatAutocompleteSelectedEvent){
    if(this.queryRelogio[0] === '') return;
      this.fieldSelected.emit(fieldEvent.option.value);
  }

}
