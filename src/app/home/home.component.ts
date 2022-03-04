import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpServiceService } from '../shared-service/http-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{

  constructor(private http:HttpServiceService) { }

  sub:any;

  ngOnInit(): void {

    if(sessionStorage["page1ItemLength"] == undefined){
      this.sub = this.http.putAllItemLengthInSessionStorage().subscribe(v => {
        sessionStorage.setItem("page1ItemLength",JSON.stringify(v.length));
      });
    }
  }

  ngOnDestroy(): void {
      if(this.sub != undefined){
        this.sub.unsubscribe();
      }
  }

}
