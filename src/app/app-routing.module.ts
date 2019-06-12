import { CreateComponent } from './create/create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { DetailComponent } from './detail/detail.component';
const routes: Routes = [
  {
    path: 'recipes/create',
    component: CreateComponent,
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    pathMatch: 'full'
  },
  {
    path: 'recipes/:id',
    component: DetailComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'recipes',
    pathMatch: 'full'
  }
];
@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }


