import {Component, Host, Input, Optional} from '@angular/core';
import {TemplateComponent} from 'src/app/template-component/template-component.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  
  @Input() titulo: string = '';
  private parentComponent?: TemplateComponent;
  
  constructor(@Host() @Optional() parent: TemplateComponent) {
    this.parentComponent = parent;
    console.log(this.parentComponent);
  }
}
