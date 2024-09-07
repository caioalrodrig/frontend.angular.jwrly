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
import { GetUserCredentialsService } from '../../shared/get-session-data.service';
import { WishListService } from '../../shared/wish-list/wish-list.service';
import { SnackbarService } from '../../shared/snackbar/snackbar.service';

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

  userData: Record<string, any> | null = {}; 
  userDataArray: [string, unknown][] = [];
  relogioTitles$;

  constructor(
    private UserProvider: UserService,
    private SnackbarProvider: SnackbarService,
    private WishListProvider: WishListService,
    private SessionDataProvider: GetUserCredentialsService
  ) {
    this.relogioTitles$ = UserProvider.relogioTitles$;
  }

  ngOnInit() {
    this.userData = this.SessionDataProvider.getCredentials('userInfo');
    this.UserProvider.getLikedTitleWatches({...this.getLikesParams,
      userId: this.userData!['userId']} )
    .pipe( tap( res => this.userDataArray = Object.values(this.userData!)))
    .subscribe( res => this.relogioTitles$.next(res));
  }

  // removeFromList(){
  //   let relogiosData = this.SessionDataProvider.getCredentials('userLikedWatches');

  //   this.WishListProvider.unlikeRelogio({userId: relogiosData[0], watchId: relogiosData[1]})
  //   .subscribe(res => { this.SnackbarProvider.openSnackBar({
  //     message: 'Item adicionado a wishlist!',
  //     icon: '🞫'
  //   }) });
  // }


  // deleteFromWishList(){
  //   const credentials = this.CredentialsProvider.getCredentials('userLikedWatches');
    
  //   this.WishListProvider.unlikeRelogio({ userId: 'userId' in credentials? 
  //     credentials.userId : 0,
  //     watchId: Number(relogioId)
  //   })

  // }
}
