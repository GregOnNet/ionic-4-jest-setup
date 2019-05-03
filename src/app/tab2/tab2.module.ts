import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppOneComponent } from '../tabs2/app-one/app-one.component';
import { AppTwoComponent } from '../tabs2/app-two/app-two.component';
import { Tab2RoutingModule } from './tab2-routing.module';
import { Tab2Page } from './tab2.page';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, Tab2RoutingModule],
  declarations: [Tab2Page, AppOneComponent, AppTwoComponent]
})
export class Tab2PageModule {}
