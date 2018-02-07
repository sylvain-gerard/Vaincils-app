import {NgModule, Component, OnInit } from '@angular/core';
import { TemplateService } from '../template.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public templateService: TemplateService) { }

  ngOnInit() {
  }
  public selectMenu(menu): void {
    this.templateService.selectMenu(menu);
  }
}
