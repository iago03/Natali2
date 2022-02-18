import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { itemInfo } from 'src/app/shared-file/shared-class';
import { HttpServiceService } from 'src/app/shared-service/http-service.service';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})
export class ItemInfoComponent implements OnInit, OnDestroy{


  last:string = "8354987172823";
  showNext:boolean = true;

  first:string = "8354986968937";
  showPrevious:boolean = true;

  constructor(private getData:HttpServiceService, private activeRoute:ActivatedRoute, private rout:Router) {
    this.rout.routeReuseStrategy.shouldReuseRoute = () => false;
   }

  ngOnInit(): void {
    this.getDataFromActiveRoute()
    this.getItemFromService()
    this.showNext = this.checkArrElement(this.last);
    this.showPrevious = this.checkArrElement(this.first);
    
  }


  ngOnDestroy(): void {
    // this.getDataFromActiveRoute()
    // this.getItemFromService()
  }

  Id:any = 0;

  firstDropDown:boolean = false;
  secondDropDown:boolean = true;

  itemInfo:any = new itemInfo();

  getItemFromService(){
    this.getData.getItemInfo(+this.Id).subscribe(v => {
      this.itemInfo = v[0];
    });
  }

  getDataFromActiveRoute(){
    this.activeRoute.params.subscribe((param:Params) => {
      this.Id = param['id'];
    })
  }

  Previous(){
    this.getData.getPreviousItemInfo(+this.Id).subscribe((v:any) => {
      this.Id = v[0].createdAt;
      this.itemInfo = v[0];

      this.rout.navigate(['/item-info',this.Id]);
    })

  }

  next(){
    this.getData.getNextItemInfo(+this.Id).subscribe((v:any) => {
      this.Id = v[0].createdAt;
      this.itemInfo = v[0];

      this.rout.navigate(['/item-info',this.Id]);
    })

  }

  dropDownFirst(){
    this.firstDropDown = !this.firstDropDown;
  }

  dropDownSecond(){
    this.secondDropDown = !this.secondDropDown;
  }


  checkArrElement(item:string):boolean{
    if(this.Id == item){
      return false
    }
    return true
  }

}