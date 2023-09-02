import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeData } from '../../data/fakeData';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover: string = 'https://i.pinimg.com/736x/f3/58/73/f3587343df2a97bf6f738bc33547c83d.jpg';

  @Input()
  contentTitle: string = 'MINHA NOTÍCIA';

  @Input()
  contentDescription: string = 'Olá Mundo';

  private id: string | null = '';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.id = value.get("id");
    })
    this.setComponentValues(this.id);
  }

  setComponentValues(id: string | null): void {
    const result = fakeData.filter(article => article.id == id)[0]
    this.photoCover = result.photo
    this.contentTitle = result.title
    this.contentDescription = result.description
  }
}
