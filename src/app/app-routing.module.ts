import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'profile-home',
    loadChildren: () => import('./profile-home/profile-home.module').then( m => m.ProfileHomePageModule)
  },
  {
    path: 'view-personal-info',
    loadChildren: () => import('./view-personal-info/view-personal-info.module').then( m => m.ViewPersonalInfoPageModule)
  },
  {
    path: 'edit-personal-info',
    loadChildren: () => import('./edit-personal-info/edit-personal-info.module').then( m => m.EditPersonalInfoPageModule)
  },
  {
    path: 'view-address-list',
    loadChildren: () => import('./view-address-list/view-address-list.module').then( m => m.ViewAddressListPageModule)
  },
  {
    path: 'view-address',
    loadChildren: () => import('./view-address/view-address.module').then( m => m.ViewAddressPageModule)
  },
  {
    path: 'edit-address',
    loadChildren: () => import('./edit-address/edit-address.module').then( m => m.EditAddressPageModule)
  },
  {
    path: 'add-address',
    loadChildren: () => import('./add-address/add-address.module').then( m => m.AddAddressPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
