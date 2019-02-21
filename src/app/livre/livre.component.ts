import {Component, OnDestroy, OnInit} from '@angular/core';
import {SelectItem} from 'primeng/api';
import {Livre} from '../Models/livre';
import {LivreService} from '../Services/livre.service';
import {NzMessageService} from 'ng-zorro-antd';
import {Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import { getLivreState, getShowAddModal, getShowEditModal} from './store/selectors/livre.selector';
import {LivreState} from './store/state/livre.state';
import {CloseModalAction, ShowAddModalAction, ShowEditModalAction} from './store/actions/livre.action';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {forbiddenTitreValidateur} from '../shared/titre.validator';
import {passwordValidator} from '../shared/password.validator';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit, OnDestroy {

  addForm: FormGroup;
  isVisible = false;
  isVisible2 = false;
  selectedColor = 'primary';

  colors = [
    {label: 'Primary', value: 'primary'},
    {label: 'Dashed', value: 'dashed'},
    {label: 'Danger', value: 'danger'}

  ];

  isConfirmLoading = false;
  sub: Subscription;

  livres: Livre[];

  newLiv: Livre = {
    id: '',
    titre: '',
    auteur: '',
    categorie: '',
    year: '',
    statut: '',
    rating: 0,
    img: '',
    description: ''
  };

  cols: any[];

  categorie: SelectItem[];

  statut: SelectItem[];

  yearFilter: number;

  yearTimeout: any;

  constructor(private livreService: LivreService,
              private nzMessageService: NzMessageService,
              private store: Store<LivreState>,
              private  fb: FormBuilder ) {

  }

  ngOnInit(): void {
    this.sub = this.livreService.subj.subscribe((livres: Livre[]) => {
      this.livres = livres;
    }, err => console.log(err));
    this.livreService.getLivres();

    /*this.addForm = new FormGroup({
      titre : new FormControl('Stars'),
      auteur : new FormControl(''),
      categorie : new FormControl(''),
      year : new FormControl(''),
      statut : new FormControl(''),
      description : new FormControl(''),
    });*/
    this.addForm = this.fb.group({
      titre: ['', [Validators.required , Validators.minLength(3), forbiddenTitreValidateur] ],
      auteur : ['' , Validators.required ],
      categorie : ['', Validators.required],
      year : ['', Validators.required],
      statut : ['', Validators.required],
      description : ['', Validators.required],
    }, {validator: passwordValidator});

    // this.store.select(getShowAddModal).subscribe(isShow => {this.isVisible = isShow; console.log('is show', isShow); });
    this.store.select(getLivreState)
      .pipe(
        select('livreReducer')
      ).subscribe(red => {
      this.isVisible = red.showAddModal;
      this.isVisible2 = red.showEditModal;
    });

    this.categorie = [
      {label: 'Tous', value: null},
      {label: 'Romance', value: 'Romance'},
      {label: 'Drama', value: 'Drama'},
      {label: 'Advanture', value: 'Advanture'},
      {label: 'Horor', value: 'Horor'}
    ];
    this.statut = [
      {label: 'Tous', value: null},
      {label: 'Disponible', value: 'Disponible'},
      {label: 'Non Disponible', value: 'Non Disponible'}
    ];
    this.cols = [
      {field: 'id', header: 'Id'},
      {field: 'titre', header: 'Titre'},
      {field: 'auteur', header: 'Auteur'},
      {field: 'categorie', header: 'Categorie'},
      {field: 'year', header: 'Year'},
      {field: 'statut', header: 'Statut'},
    ];
  }

  onYearChange(event, dt) {
    if (this.yearTimeout) {
      clearTimeout(this.yearTimeout);
    }

    this.yearTimeout = setTimeout(() => {
      dt.filter(event.value, 'year', 'gt');
    }, 250);
  }

  showModal(): void {
    this.store.dispatch(new ShowAddModalAction());
    this.init();
  }

  showModal2(id): void {
    this.newLiv = Object.assign({}, this.livres.filter(md => md.id === id)[0]);
    this.store.dispatch(new ShowEditModalAction());
  }

  ajouterLivre(): void {
    const d: Date = this.addForm.get('year').value;
    this.newLiv = {
      id : this.livres[this.livres.length - 1].id + 1 ,
      titre : this.addForm.get('titre').value,
      auteur : this.addForm.get('auteur').value,
      categorie : this.addForm.get('categorie').value,
      year : d.getFullYear() ,
      statut : this.addForm.get('statut').value,
      description : this.addForm.get('description').value,
      img : '',
      rating : ''
    };
    this.livreService.ajouteLivre(this.newLiv);
    this.livreService.getLivres();
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 2000);
  }

  modifierLivre(): void {
    this.livreService.modifierLivre(this.newLiv);
    this.livreService.getLivres();
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible2 = false;
      this.isConfirmLoading = false;
    }, 1000);
  }

  annuler(): void {
    this.store.dispatch(new CloseModalAction());
  }

  cancel(): void {
    this.nzMessageService.info('Annuler !');
  }

  confirm(idd): void {
    this.livreService.supprimerLivre(idd);
    this.nzMessageService.success('Livre Supprimer ');
    this.livreService.getLivres();
  }

  init(): void {
    this.newLiv = {
      id: '',
      titre: '',
      auteur: '',
      categorie: '',
      year: '',
      statut: '',
      rating: 0,
      img: '',
      description: ''
    };
  }

  ngOnDestroy(): void {
    /*this.livreService.subj.unsubscribe();*/
  }

  onColorChange(val) {
    console.log(val);
    this.selectedColor = this.colors.filter( col => col.label === val)[0].value;
   // console.log(this.colors.filter( col => col.label === val));
  }

}
