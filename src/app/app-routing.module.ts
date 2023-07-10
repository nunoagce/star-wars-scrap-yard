import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: "",
        pathMatch: 'full',
        loadComponent: () => import('./layout/feature/layout/layout.component').then(c => c.LayoutComponent),
        children: [
            {
                path: "",
                pathMatch: 'full',
                redirectTo: "vehicles"
            },
            {
                path: "vehicles",
                loadComponent: () => import('./vehicles/feature/shell/shell.component').then(c => c.ShellComponent)
            },
            {
                path: "parts",
                loadComponent: () => import('./parts/feature/shell/shell.component').then(c => c.ShellComponent)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
