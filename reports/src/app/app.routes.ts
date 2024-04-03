import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'forms',
        // canActivate: [authGuardFn],
        loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule)
    },
];
