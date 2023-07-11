import { Routes } from "@angular/router";

export const ROUTES: Routes = [
    {
        path: "",
        pathMatch: 'full',
        redirectTo: 'vehicles'
    },
    {
        path: "vehicles",
        loadComponent: () => import('./vehicles/feature/shell/shell.component').then(c => c.ShellComponent)
    },
]