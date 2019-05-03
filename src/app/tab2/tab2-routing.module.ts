import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { Tab2Page } from './tab2.page';
import { AppOneComponent } from '../tabs2/app-one/app-one.component';
import { AppTwoComponent } from '../tabs2/app-two/app-two.component';

const routes: Route[] = [
  {
    path: '',
    component: Tab2Page,
    children: [
      { path: 'app-one', component: AppOneComponent },
      { path: 'app-two', component: AppTwoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2RoutingModule {}
