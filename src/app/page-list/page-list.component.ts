import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit
{
@Input() pages:any=[];
constructor(){}
  ngOnInit(){}
}
