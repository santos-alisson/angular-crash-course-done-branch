import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isRenderingComponent = true;
  displaying = 1;
  textoInicio = 'texto Inicio';

  destroyComponent(): void {
    this.isRenderingComponent = !this.isRenderingComponent;
  }

  display(example: number): void {
    this.displaying = example;
  }
}
