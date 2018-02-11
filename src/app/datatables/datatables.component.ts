import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { DataTableDirective } from 'angular-datatables';

import 'rxjs/add/operator/map';

class Person {
  id: number;
  firstName: string;
  lastName: string;
}
class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
@NgModule({
  imports: [DataTablesModule, DataTableDirective],
  providers: [HttpClient, HttpResponse]
})
@Component({
  selector: 'app-datatables',
  templateUrl: './datatables.component.html',
  styleUrls: ['./datatables.component.css']
})
export class DatatablesComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }
}
