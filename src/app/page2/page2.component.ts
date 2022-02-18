import { Component, HostListener, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/shared-service/http-service.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  cardsItemNam:number = 8354986968937;

  constructor(private http:HttpServiceService) { }

  ngOnInit(): void {
    this.http.getItemsFromFirebase().subscribe((v: any) => this.cardsItem = v)
  }


  cardsItem:any[] = [];

  
  @HostListener("window:scroll", []) onWindowScroll(){
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){

      // if(!(this.cardsItemNam >= this.http.page2Arry.length)){
      
      //   if(this.http.page2Arry.length > this.cardsItemNam + 10){
      //     this.cardsItem = this.cardsItem.concat(this.http.page2Arry.slice(this.cardsItemNam,this.cardsItemNam + 10));
      //     this.cardsItemNam += 10;
      //   }else{
      //     this.cardsItem = this.cardsItem.concat(this.http.page2Arry.slice(this.cardsItemNam,this.cardsItemNam + (this.http.page2Arry.length - this.cardsItemNam)));
      //     this.cardsItemNam += 10;
      //   }
  
      // }

      this.cardsItemNam = this.cardsItem[this.cardsItem.length - 1].createdAt;

      this.http.scrollgetItemsFromFirebase(this.cardsItemNam).subscribe((v:any) => {
        this.cardsItem = this.cardsItem.concat(v);
      })
    }
  }
}
