import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { PostsCreateComponent } from './posts-create/posts-create.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { AngularMaterialModule } from "../angular-material.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations:[
        PostsCreateComponent,
        PostsListComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        RouterModule
    ]
})

export class PostsModule {}