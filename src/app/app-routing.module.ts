import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListItemsComponent } from './components/list-items/list-items.component'
import { WelcomeComponent } from './components/welcome/welcome.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { MylistdisplayComponent } from './components/mylistdisplay/mylistdisplay.component'
import { ListviewComponent } from './components/listview/listview.component'

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'mylists/:id', component: ListItemsComponent},
  {path: 'mylists', component: ListviewComponent},
  {path: 'mylistdisplay', component: MylistdisplayComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
