import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {
        path: 'chat',
        canActivate: [authGuard],
        loadComponent: () => import('./pages/chat/chat.component').then((c)=> c.ChatComponent)
    },
    {
        path: 'login', loadComponent: () => import('./pages/login/login.component').then((l)=> l.LoginComponent)
    },
    {
        path: '', loadComponent: () => import('./pages/login/login.component').then((l)=> l.LoginComponent)
    }
];
