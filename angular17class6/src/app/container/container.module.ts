import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificationModule } from '../notification/notification.module';
import { ContainerComponent } from './container.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [ContainerComponent, HeaderComponent, MenuComponent],
  imports: [NotificationModule, CommonModule, FormsModule],
  exports: [ContainerComponent]
})
export class ContainerModule { }
