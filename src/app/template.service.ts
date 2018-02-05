import { Injectable } from '@angular/core';

@Injectable()
export class TemplateService {

  constructor() { }
  selectedMenu = 'home';
  selectMenu(menu) {
    this.selectedMenu = menu;
  }
}
