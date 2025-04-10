import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
//import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss'],
	imports: [ MatCardModule, MatInput, MatFormFieldModule, MatIcon, MatButton,CommonModule],
	standalone: true
})
export class LoginPageComponent {
	private readonly _router = inject(Router);

	clickSingUp(): void {
		// this._router.navigateByUrl('/home');
		// this._router.navigateByUrl('/home', { state: { isAdmin: true } });
		this._router.navigate(['/home'], { queryParams: { user: 'jimy' }, state: { isAdmin: true } });
	}
}
