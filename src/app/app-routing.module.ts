import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: "",
        pathMatch: 'full',
        loadComponent: () => import('./layout/feature/layout/layout.component').then(c => c.LayoutComponent),
        // children: [
        //     {
        //         path: '**',
        //         loadChildren: () => import('./features-routes').then(r => r.ROUTES)
        //     }
        // ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
