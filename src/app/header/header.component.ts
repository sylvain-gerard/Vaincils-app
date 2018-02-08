import { NgModule, Component, OnInit } from '@angular/core';
import { TemplateService } from '../template.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public templateService: TemplateService, public route: ActivatedRoute) { }

  ngOnInit() {}

  public selectMenu(menu): void {
    this.templateService.selectMenu(menu);
  }
}
