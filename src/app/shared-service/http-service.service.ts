import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private angularFirestore:AngularFirestore) { }

  putAllItemLengthInSessionStorage(){
    return this.angularFirestore.collection('iago').valueChanges()
  }

  
  getItemsFromFirebase(){
    return this.angularFirestore.collection('iago', ref => ref 
      .orderBy("createdAt")
      .limit(5)
    ).valueChanges()
  }

  scrollgetItemsFromFirebase(item:number){
    return this.angularFirestore.collection('iago', ref => ref 
      .orderBy("createdAt")
      .startAfter(item)
      .limit(5)
    ).valueChanges()
  }

  getItemInfo(id:number){
    return this.angularFirestore.collection('iago', ref => ref 
    .orderBy("createdAt")
    .startAt(id)
    .limit(1)
  ).valueChanges()
  }

  getNextItemInfo(id:number){
    return this.angularFirestore.collection('iago', ref => ref 
    .orderBy("createdAt")
    .startAfter(id)
    .limit(1)
  ).valueChanges()
  }

  getPreviousItemInfo(id:number){
    return this.angularFirestore.collection('iago', ref => ref 
    .orderBy("createdAt")
    .endBefore(id)
    .limitToLast(1)
  ).valueChanges()
  }
}