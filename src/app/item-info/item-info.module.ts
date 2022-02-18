import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ItemInfoComponent } from "./item-info.component";

@NgModule({
    declarations: [
        ItemInfoComponent,
    ],
    imports: [ 
        CommonModule,
        RouterModule.forChild([
            {path:'', component:ItemInfoComponent}
        ])
    ],

    exports:[
        RouterModule
    ]
})

export class ItemInfoModule{

}