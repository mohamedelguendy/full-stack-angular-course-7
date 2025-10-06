import { Routes } from '@angular/router';
import { NgModel } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home';
import { About } from './about/about';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path:'home', component: About},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
