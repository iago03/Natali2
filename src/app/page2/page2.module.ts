import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModul } from "../shared-module/shared.modules";

import { Page2Component } from "./page2.component";

@NgModule({
    declarations:[
        Page2Component
    ],
    imports:[
        CommonModule,
        SharedModul,
        RouterModule.forChild([
            {path:'', component:Page2Component},
        ])
    ],
    exports:[
        RouterModule
    ]
})

export class Page2Module{

}