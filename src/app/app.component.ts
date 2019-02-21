import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {LivreState} from './livre/store/state/livre.state';
import {ShowAddModalAction} from './livre/store/actions/livre.action';
import {Livre} from './Models/livre';
import {LivreService} from './Services/livre.service';
import {Subscription} from 'rxjs';
import {AppState} from './store/state/app.state';
import {ToHome, ToLivre} from './store/actions/app.actions';
import {getLivreState} from './livre/store/selectors/livre.selector';
import {getAppState} from './store/selectors/app.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'livre-app';
  isCollapsed = false;
  triggerTemplate = null;
  isGoToHome = false ;
  isGoToLivre = false ;
  ratedLivres: Livre[];
  sub: Subscription ;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  constructor(private store1: Store<LivreState> , private store2: Store<AppState> , private livreService: LivreService) {
  }
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  ngOnInit(): void {

    this.sub = this.livreService.subj2.subscribe((ratLivres: Livre[]) => {
      this.ratedLivres = ratLivres;
    }, err => console.log(err));

    this.livreService.getRatedLivres();

    // this.store2.select(getAppState)
    //   .pipe(
    //     select('appReducer')
    //   ).subscribe(red => {
    //   this.isGoToHome = red.goToHome;
    //   this.isGoToLivre = red.goToLivre;
    // });

  }


  showAddModal() {
  this.store1.dispatch(new ShowAddModalAction());
  }

  toHome() {
    this.store2.dispatch(new ToHome());
  }
  toLivre() {
    this.store2.dispatch(new ToLivre());
  }

  getRatedLivres() {
    console.log(this.livreService.getRatedLivres());
  }
}
