import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/interfaces/project.interface';
import { ProjectList } from 'src/app/shared/constants/projects.constant';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ProjectsDetailComponent } from '../projects-detail/projects-detail.component';

@Component({
    selector: 'app-projects-list',
    templateUrl: './projects-list.component.html',
    styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit {
    projects: Project[] = ProjectList;

    constructor(private modalService: BsModalService) {}

    ngOnInit(): void {}

    onShowModal(value: Project): void {
        console.log(value);
        const modal = this.modalService.show(ProjectsDetailComponent, {
            class: 'modal-xl',
            initialState: { project: value, isModal: true },
        });
        // modal.content.project
    }
}
