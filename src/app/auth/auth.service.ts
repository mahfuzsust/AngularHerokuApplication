import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	uri = '/api';
	token;

	constructor(private http: HttpClient, private router: Router) { }
	login(email: string, password: string) {
		console.log(email + password);
		this.http.post(this.uri + '/authenticate', { email: email, password: password })
			.subscribe((resp: any) => {
				this.router.navigate(['profile']);
				localStorage.setItem('auth_token', resp.token);
			})
	}


	public get logIn(): boolean {
		return (localStorage.getItem('auth_token') !== null);
	}

	logout() {
		localStorage.removeItem('auth_token');
		this.router.navigate(['/']);
	}
}
