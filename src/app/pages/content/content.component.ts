import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input()
  photoCover: string = 'https://i.pinimg.com/736x/f3/58/73/f3587343df2a97bf6f738bc33547c83d.jpg';

  @Input()
  contentTitle: string = 'MINHA NOTÍCIA';

  @Input()
  contentDescription: string = 'Olá Mundo';
}
