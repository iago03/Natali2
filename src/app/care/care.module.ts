import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CareComponent } from "./care.component";

@NgModule({
    declarations:[
        CareComponent
    ],
    imports:[
        RouterModule.forChild([
            {path:'',component:CareComponent},
        ])
    ],
    exports:[
        RouterModule
    ]
})

export class CareModule{

}