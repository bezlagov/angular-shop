import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { CanActivate } from "@angular/router";

@Injectable({ providedIn: "root" })
export class AuthService  implements CanActivate {
    isAuthOn: boolean = false;
    token: string = "";
    constructor(private http: HttpClient) { }


    login(log: string, pas: string, isCorrect: boolean) {
        if (isCorrect) {
            log = "mor_2314";
            pas = "83r5^_";
        }
        return this.http.post('https://fakestoreapi.com/auth/login', { username: log, password: pas });
    }

    canActivate(): boolean {
        return this.token!== "";
    }
}