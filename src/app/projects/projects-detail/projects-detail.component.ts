import { Component, OnInit, Optional } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { tick } from '@angular/core/testing';
import { Project } from 'src/app/shared/interfaces/project.interface';
import { ProjectList } from 'src/app/shared/constants/projects.constant';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-projects-detail',
    templateUrl: './projects-detail.component.html',
    styleUrls: ['./projects-detail.component.scss'],
})
export class ProjectsDetailComponent implements OnInit {
    project: Project;
    isModal: boolean;
    constructor(
        private router: ActivatedRoute,
        @Optional() public bsModalRef: BsModalRef
    ) {}

    ngOnInit(): void {
        const id = +this.router.snapshot.paramMap.get('id');
        if (id) {
            this.project = ProjectList.find((x) => x.id === id);
        }
    }

    onCloseModal(): void {
        this.bsModalRef.hide();
    }
}
