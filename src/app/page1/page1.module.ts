import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModul } from "../shared-module/shared.modules";
import { Page1Component } from "./page1.component";


@NgModule({
    declarations: [
        Page1Component
    ],
    imports:[
        CommonModule,
        SharedModul,
        RouterModule.forChild([
            {path:'', component:Page1Component},
        ])
    ],
    exports:[
        RouterModule
    ]
})

export class Page1Module{

}