import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidarUsuarioGuard } from './shared/guards/validar-usuario.guard';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: 'examples',
        canActivate: [ValidarUsuarioGuard],
        loadChildren: () =>
            import('./example/example.module').then((m) => m.ExampleModule),
    },
    {
        path: 'music',
        canActivate: [ValidarUsuarioGuard],
        loadChildren: () =>
            import('./music/music.module').then((m) => m.MusicModule),
    },
    {
        path: 'cuentas',
        canActivate: [ValidarUsuarioGuard],
        loadChildren: () =>
            import('./cuentas/cuentas.module').then((m) => m.CuentasModule),
    },
    {
        path: 'project',
        canActivate: [ValidarUsuarioGuard],
        loadChildren: () =>
            import('./projects/projects.module').then((m) => m.ProjectsModule),
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
