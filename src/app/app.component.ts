import { Component,Injectable,Output } from '@angular/core';
import { WikipediaService } from './wikipedia.service';
@Injectable({providedIn:'root'})
export class Car{
  color:string='red'
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 pages=[];
  constructor(private wikipedia:WikipediaService,private car:Car){}
  onTerm(term:string){
this.wikipedia.search(term).subscribe((response:any)=>{
  this.pages=response;
})
  }
}
