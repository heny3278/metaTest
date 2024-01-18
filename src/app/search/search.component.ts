import { Component } from '@angular/core';
import { StoreService } from '../service/store.service';
import Store from '../model/Store';

@Component({
  selector: 'app-search',
  templateUrl:'./search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {
  visi:string="hidden";

  freeText:string="";
  selectedArea:number;
  selectedCity:string;
  forTable:Store[]=[];
  flagView:boolean=false;
  storesArr:Store[]=[]||undefined;
  areas:number[]=[]||undefined;
  cities:string[]=[]||undefined;


  constructor(public stroeservics:StoreService) { 
    this.stroeservics.GetAllStores().subscribe((succ) => {
      this.storesArr=succ;
      console.log("succ",succ);
      console.log("succ",this.storesArr);
      this.funcArea()

    }
      , (err) => {
        console.log("err",err);
      });
  }
  funcArea(){
    
    this.storesArr.forEach(s => {
    
      if (!this.areas.includes(s.store_region)) {
        this.areas.push(s.store_region);
      }

    });
    console.log("areas",this.areas);
    console.log("selected",this.selectedArea);

    
  }
  funcCity(event:any){
  this.forTable=[];

  
  this.storesArr.forEach(s=>{
    console.log("sele",this.selectedArea);
  if(s.store_region==this.selectedArea&&!this.cities.includes(s.city))
  {
    this.cities.push(s.city);
 
  }
  if(s.store_region==this.selectedArea)
  this.forTable.push(s);
  })
    console.log("city",this.cities);
    console.log("table",this.forTable);


}
view(){
this.flagView=true;
}

text(event:Event ){
  this.storesArr.forEach(s => {
    if(this.freeText&&s.emp_contact)
    if(s.city.includes(this.freeText)||s.store_address.includes(this.freeText)||s.store_title.includes(this.freeText))
    {
      this.forTable.push(s);
    }
  })
  this.view();
    
}
 

  
}
