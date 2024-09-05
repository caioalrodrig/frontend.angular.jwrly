import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { UserService } from './user.service';
import { tap } from 'rxjs';
import { GetUserCredentialsService } from '../../shared/get-user-credentials.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ CommonModule, MatFormFieldModule, 
    MatButtonModule, ReactiveFormsModule,
    MatInputModule, MatExpansionModule, MatIcon],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  readonly getLikesParams = {
    page: 1,
    limit: 10,
  };

  sessionData: Record<string, any> | null = {}; 
  sessionDataArray: [string, unknown][] = [];
  relogioTitles$;

  constructor(
    private UserProvider: UserService,
    private credentialsProvider: GetUserCredentialsService
  ) {
    this.relogioTitles$ = UserProvider.relogioTitles$;
  }

  ngOnInit() {
    this.sessionData = this.credentialsProvider.getCredentials();
    this.UserProvider.getLikedTitleWatches({...this.getLikesParams,
      userId: this.sessionData!['userId']} )
    .pipe( tap( res => this.sessionDataArray = Object.values(this.sessionData!)))
    .subscribe( res => this.relogioTitles$.next(res));
  }

}
