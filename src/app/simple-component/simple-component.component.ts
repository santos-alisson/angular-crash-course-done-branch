import { Component, EventEmitter, Host, Input, OnDestroy, OnInit, Optional, Output } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-simple-component',
  templateUrl: './simple-component.component.html',
  styleUrls: ['./simple-component.component.scss']
})
export class SimpleComponent {
  @Input() texto: string = 'texto padrão input';
  @Output() selfDestruction = new EventEmitter<void>();
  textoNaoInput: string = 'texto';

  showText(): void {
    console.log(this.texto);
  } 

  emitClick(): void {
    this.selfDestruction.emit();
  }

  /* transformToUpperCase(): string {
    console.log("chamou transform");
    return this.texto.toUpperCase();
  } */
}
