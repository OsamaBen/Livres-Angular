import {Livre} from '../Models/livre';
import {BehaviorSubject, Observable, Subject, of} from 'rxjs';
import * as _ from 'lodash';

export class LivreService {

  Livres = [
    { id: 1,
      titre: 'The Great Gatsby',
      auteur: 'Marine Sydre',
      categorie: 'Romance',
      year: '1995',
      statut: 'Disponible',
      rating: 5,
      img : 'assets/images/demo/gallery/01.jpg',
      description: 'I\'m honestly a little surprised to see Gatsby topping this list. I ' +
        'mean yes, sure, it\'s absolutely one of the "Great American Novels" or whatever. And yes,' +
        ' it has inspired many, many swinging theme parties (most of which seem to miss the point that '
    },
    { id: 2,
      titre: 'Harry Potter and the Sorcerer\'s Stone',
      auteur: 'Jhon lapin',
      categorie: 'Drama',
      year: '1975',
      statut: 'Non Disponible',
      rating: 7,
      img : 'assets/images/demo/gallery/02.jpg',
      description: 'Of course. Harry Potter is a bestseller several hundred times over, and most true fans have read the series two,' +
        ' or three, or ten times all the way through. Harry Potter '
    },
    { id: 3,
      titre: '1984 : by George Orwell',
      auteur: 'George Orwell',
      categorie: 'Advanture',
      year: '2006',
      statut: 'Disponible',
      rating: 9,
      img : 'assets/images/demo/gallery/03.jpg',
      description : 'Yeah, it\'s no secret that 1984 is back on the bestseller\'s list. ' +
        'It rocketed up 9,500 percent in sales following Trump\'s inauguration. So I think it\'s safe to say that this is '
    },
    { id: 4,
      titre: 'The Hobbit',
      auteur: 'Michelle Obama',
      categorie: 'Advanture',
      year: '2018',
      statut: 'Disponible',
      rating: 12,
      img : 'assets/images/demo/gallery/4.jpg',
      description : 'Not very controversial opinion: The Hobbit is Tolkien\'s best book. ' +
        'I\'m sure there are plenty of people re-reading The Lord of the Rings proper,' +
        ' but The Hobbit is just much '
    },
    { id: 5,
      titre: 'To Kill a Mockingbird',
      auteur: 'Diana Merc',
      categorie: 'Drama',
      year: '1945',
      statut: 'Non Disponible',
      rating: 3,
      img : 'assets/images/demo/gallery/5.jpg',
      description : 'As far as re-reading books, To Kill a Mockingbird is the perfect storm: we all read it in school, ' +
        'it has the nostalgic air of childhood about it, ' +
        'it introduced a lot of us to '
    },
    { id: 6,
      titre: 'The Catcher in the Rye',
      auteur: 'Nicolas Digne',
      categorie: 'Horor',
      year: '1984',
      statut: 'Non Disponible',
      rating: 1,
      img : 'assets/images/demo/gallery/6.jpg',
      description : 'Honestly, I\'m glad that someone out there is re-reading The Catcher in the Rye. It just gets so much hate. ' +
        'I\'m going to go on the public record and say that I liked Holden '
    },
    { id: 7,
      titre: 'Every Other Harry Potter Book',
      auteur: 'Dan Brown',
      categorie: 'Advanture',
      year: '1962',
      statut: 'Disponible',
      rating: 1,
      img : 'assets/images/demo/gallery/7.jpg',
      description : 'OK, if I listed the rest of the Harry Potter series book by book, we\'d be here all night. ' +
        'So I\'m just going to say that the next six most re-read books are all Potter all the '
    },
    { id: 8,
      titre: 'Fahrenheit 451',
      auteur: 'Diana Merc',
      categorie: 'Drama',
      year: '1990',
      statut: 'Disponible',
      rating: 1,
      img : 'assets/images/demo/gallery/8.jpg',
      description : 'Fahrenheit 451 is only just behind 1984 when it comes to famous sci-fi dystopias. ' +
        'Perhaps Fahrenheit 451 is slightly closer to home for book-lovers,' +
        ' though, since it '
    },
    { id: 9,
      titre: 'Pride and Prejudice',
      auteur: 'John Green',
      categorie: 'Romance',
      year: '2012',
      statut: 'Non Disponible',
      rating: 1,
      img : 'assets/images/demo/gallery/9.jpg',
      description : 'I\'m shocked that Pride and Prejudice isn\'t higher on this list. Shocked. It\'s Pride and Prejudice, ' +
        'people! The original rom-com! The awkward, sassy, slow-burn, enemies-to-lovers'
    }
  ];
  subj: Subject<Livre[]> = new Subject<Livre[]>();
  subj2: Subject<Livre[]> = new Subject<Livre[]>();

  getLivres() {
    this.subj.next(this.Livres.slice());
  }

  getLivreById(id): Livre {
    return this.Livres.filter(md => md.id === id)[0];
  }

  ajouteLivre(livre: Livre): void {
      this.Livres.push(livre) ;
  }

  modifierLivre(livre: Livre) {
    this.Livres[this.Livres.indexOf(this.getLivreById(livre.id))] = livre ;
  }

  supprimerLivre(idd) {
    this.Livres = this.Livres.filter(sup => sup.id !== idd);
  }

  getRatedLivres() {
    const ratedLivres = _.reverse(_.sortBy(this.Livres, ['rating']));
    this.subj2.next(ratedLivres.filter( o => ratedLivres.indexOf(o) <= 2).slice());
  }
}
