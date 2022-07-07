import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Token } from 'src/app/model/token';
import { AuthService } from 'src/app/services/auth.service';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-auth-popup',
  templateUrl: './auth-popup.component.html',
  styleUrls: ['./auth-popup.component.css']
})
export class AuthPopupComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  getStatus(): boolean {
    return this.authService.isAuthOn;
  }
  onClose() {
    this.authService.isAuthOn = false;
  }

  onSubmit(log: string, pas: string, correct: boolean) {
    this.authService.login(log, pas, correct).subscribe(res => {
      let token: Token = <Token>res;

      if (token) {
        this.authService.isAuthOn = false;
        this.authService.token = token.token;
        this.router.navigateByUrl("/admin");
      this.onClose();
    }

    }, err => {
console.dir(err);

      alert("error login");
      this.onClose();
    })
  }
}
