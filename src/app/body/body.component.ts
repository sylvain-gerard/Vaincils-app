import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../template.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public isSmallScreen: boolean;

  constructor(public templateService: TemplateService) {}

  ngOnInit() {}

}
