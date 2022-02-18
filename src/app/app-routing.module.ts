import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'page-1', loadChildren: () => import('./page1/page1.module').then(m => m.Page1Module)},
  {path: 'page-2', loadChildren: () => import('./page2/page2.module').then(m => m.Page2Module)},
  {path: 'about-us', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)},
  {path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)},
  {path: 'item-info/:id', loadChildren: () => import('./item-info/item-info.module').then(m => m.ItemInfoModule)},
  {path: 'care', loadChildren: () => import('./care/care.module').then(m => m.CareModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
