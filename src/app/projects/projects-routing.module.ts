import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectsDetailComponent } from './projects-detail/projects-detail.component';
import { ProjectsIndexComponent } from './projects-index/projects-index.component';
import { ValidarUsuarioGuard } from '../shared/guards/validar-usuario.guard';

const routes: Routes = [
    {
        path: '',
        component: ProjectsComponent,
        children: [
            {
                path: '',
                component: ProjectsIndexComponent
            },
            {
                path: 'detail/:id',
                component: ProjectsDetailComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProjectsRoutingModule {}
