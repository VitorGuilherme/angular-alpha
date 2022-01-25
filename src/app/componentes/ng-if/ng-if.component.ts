import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent  {
// criando a  propriedade para vinculação na view usando *ngIf
exiba!: boolean

}
