import { NgModule, Component, OnInit } from '@angular/core';
import { TemplateService } from '../template.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public templateService: TemplateService) { }

  ngOnInit() {
  }

  public selectMenu(menu): void {
    this.templateService.selectMenu(menu);
  }
}
