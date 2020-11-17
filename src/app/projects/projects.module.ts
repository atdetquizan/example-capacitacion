import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectsDetailComponent } from './projects-detail/projects-detail.component';
import { ProjectsIndexComponent } from './projects-index/projects-index.component';

import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
    declarations: [ProjectsComponent, ProjectsListComponent, ProjectsDetailComponent, ProjectsIndexComponent],
    imports: [CommonModule, ProjectsRoutingModule, SharedModule, ModalModule.forRoot()],
})
export class ProjectsModule {}
