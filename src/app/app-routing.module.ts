import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'examples',
        loadChildren: () =>
            import('./example/example.module').then((m) => m.ExampleModule),
    },
    {
        path: 'music',
        loadChildren: () =>
            import('./music/music.module').then((m) => m.MusicModule),
    },
    {
        path: 'cuentas',
        loadChildren: () =>
            import('./cuentas/cuentas.module').then((m) => m.CuentasModule),
    },
    {
        path: 'project',
        loadChildren: () =>
            import('./projects/projects.module').then((m) => m.ProjectsModule),
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'examples'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
