import { Component, OnInit } from '@angular/core';
import {Livre} from '../Models/livre';
import {LivreService} from '../Services/livre.service';

@Component({
  selector: 'app-livre-gallerie',
  templateUrl: './livre-gallerie.component.html',
  styleUrls: ['./livre-gallerie.component.css']
})
export class LivreGallerieComponent implements OnInit {

  livres: Livre[] = [];
  isVisible: boolean ;
  livreToShow: Livre ;
  constructor(private livreService: LivreService) { }

  ngOnInit() {
    this.livres = this.livreService.Livres;
    this.isVisible = false ;
  }

  annuler() {
    this.isVisible = false ;
  }

  showDetails(id) {
    this.isVisible = true ;
    this.livreToShow = this.livreService.getLivreById(id);
  }
}
