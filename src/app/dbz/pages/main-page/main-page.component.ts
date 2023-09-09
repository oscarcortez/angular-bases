import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor( private dbzService: DbzService ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  get characters(): Character[] {
    return [...this.dbzService.characters]
  }

  onDeleteCharacter( id: string ): void {
    this.dbzService.onDeleteCharacterById( id )
  }

  onNewCharacter( character: Character ) {
    this.dbzService.addCharacter( character )
  }
}
