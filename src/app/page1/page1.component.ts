import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/shared-service/http-service.service';
import { itemInfo } from '../shared-file/shared-class';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit, OnDestroy {


  cardsItemNam:number = 0;
  loading:boolean = true;

  constructor(private http:HttpServiceService, private rout:Router) { }

  ngOnInit(): void {
    this.http.getItemsFromFirebase().subscribe((v: any) => {
      
      this.cardsItem = v
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.cardsItem = [];
  }

  getToItemInfo(id:number){
    this.rout.navigate(['/item-info',id])
  }


  cardsItem:any[] = [];

  @HostListener("window:scroll", []) onWindowScroll(){
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
      this.loading = true;

      if(this.cardsItem.length > 0){
        this.cardsItemNam = this.cardsItem[this.cardsItem.length - 1].createdAt;

        this.http.scrollgetItemsFromFirebase(this.cardsItemNam).subscribe((v:any) => {
          this.cardsItem = this.cardsItem.concat(v);
          this.loading = false;
        })


      }

    };
    
  }

}
