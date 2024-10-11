import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { VacationComponent } from './vacation/vacation.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'vacation', component:VacationComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
