import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductModule } from './product/product.module';
import { ProductBemModule } from './product-bem/product-bem.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductModule, ProductBemModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular17class7';
}
