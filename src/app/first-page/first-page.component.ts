import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StudentsService} from '../services/students.service';
import {ac, Nod} from '../ac';
import {SearchData, SearchArray} from '../student';

interface OptionSelects {
  value: string;
  text: string;
  id: number;
}

type dataArray = Array<{ id: number, text: string }>;

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  selectCicluStudiiFormGroup: FormGroup;
  selectDomPSFormGroup: FormGroup;
  selectAnSerieGrupaFromGroup: FormGroup;

  idFac = 2; // de test
  detaliiFacultate: object;

  CICLU: Array<OptionSelects> = [];
  DOMENIU: Array<OptionSelects> = [];
  PROGRAM: Array<OptionSelects> = [];
  AN: Array<OptionSelects> = [];
  SERIE: Array<OptionSelects> = [];
  GRUPA: Array<OptionSelects> = [];

  searchArray = new SearchArray();

  constructor(private formBuilder: FormBuilder, private studentsService: StudentsService) {
  }

  ngOnInit(): void {
    this.selectCicluStudiiFormGroup = this.formBuilder.group({
      CICLU: ['', Validators.required]
    }),
      this.selectDomPSFormGroup = this.formBuilder.group({
        DOMENIU: ['', Validators.required],
        PROGRAM: ['']
      }),
      this.selectAnSerieGrupaFromGroup = this.formBuilder.group({
        AN: ['', Validators.required],
        SERIE: [''],
        GRUPA: ['']
      }),

      this.distribuieCicluStudii(this.idFac);
  }

  distribuieCicluStudii = (idFac) => {
    this.detaliiFacultate = ac[0];
    console.log(ac[0]);
    this.createSelect('CICLU', this.detaliiFacultate);
  }

  createSelect = (search, grup: object) => { // in functia asta avem ceea ce arata in select
    for (const key of Object.keys(grup)) {
      if (grup[key].tip === search) {
        this[search].push({
          value: grup[key].nume,
          text: grup[key].nume,
          id: grup[key].id
        });
      }
    }
    console.log(search, this[search]);
  }

  // tslint:disable-next-line:typedef
  assignData(searchSelected, valueSelected) {
    let idSelected;

    for (const key in this[searchSelected]) {
      if (valueSelected === this[searchSelected][key].value) {
        idSelected = this[searchSelected][key].id;
      }
    }

    if (searchSelected === 'CICLU') {
      this.searchArray.data = [
        new SearchData({id: idSelected, value: valueSelected, name: 'CICLU'}),
      ];

      this.DOMENIU = [];
      this.createSelect('DOMENIU', this.detaliiFacultate[valueSelected].date);

      // const cicluStd = this.searchArray.data[0].value;

      // if (cicluStd === 'Doctorat') {
      //   this.selectDomPSFormGroup.controls.PROGRAM.clearValidators();
      // } else {
      //   this.selectDomPSFormGroup.controls.PROGRAM.setValidators([Validators.required]);
      // }

    } else { // facem in asa fel incat datele sa nu fie de mai multe ori, la ciclu avem garantia ca e doar odata
      let sw = 0;
      // tslint:disable-next-line:forin
      for (const searchRow in this.searchArray.data) {
        if (this.searchArray.data[searchRow].name === searchSelected) {
          this.searchArray.data[searchRow].value = valueSelected;
          this.searchArray.data[searchRow].id = idSelected;
          sw = 1;
        }
      }

      if (sw === 0) {
        const searchData = new SearchData({id: idSelected, value: valueSelected, name: searchSelected});
        this.searchArray.data.push(searchData);
      }
    }

    if (searchSelected === 'DOMENIU') {
      this.AN = [];
      this.PROGRAM = [];
      this.refreshArrayKeys(searchSelected);
      const cicluStd = this.searchArray.data[0].value;
      if (cicluStd === 'Doctorat') {
        this.selectDomPSFormGroup.controls.PROGRAM.disable();

        this.createSelect('AN', this.detaliiFacultate[cicluStd].date[valueSelected].date);
      } else {
        this.selectDomPSFormGroup.controls.PROGRAM.enable();

        this.createSelect('PROGRAM', this.detaliiFacultate[cicluStd].date[valueSelected].date);
      }
    }

    if (searchSelected === 'PROGRAM') {
      this.AN = [];
      this.refreshArrayKeys(searchSelected);
      const cicluStd = this.searchArray.data[0].value;
      const domeniu = this.searchArray.data[1].value;
      this.createSelect('AN', this.detaliiFacultate[cicluStd].date[domeniu].date[valueSelected].date);
    }

    if (searchSelected === 'AN') {
      this.SERIE = [];
      this.GRUPA = [];
      this.refreshArrayKeys(searchSelected);
      const cicluStd = this.searchArray.data[0].value;
      const domeniu = this.searchArray.data[1].value;

      if (cicluStd !== 'Doctorat') {
        const program = this.searchArray.data[2].value;
        const anSubgrup = this.detaliiFacultate[cicluStd].date[domeniu].date[program].date[valueSelected].date;
        let tip: string;
        console.log(anSubgrup);

        // tslint:disable-next-line:forin
        for (const elem in anSubgrup)
        {
          if (anSubgrup[elem].tip === 'SERIE') {
            this.selectAnSerieGrupaFromGroup.controls.SERIE.enable();
            tip = 'SERIE';
            break;
          } else if (anSubgrup[elem].tip === 'GRUPA') {
            tip = 'GRUPA';
            this.selectAnSerieGrupaFromGroup.controls.SERIE.disable();
            break;
          }
        }

        if (tip === 'SERIE') {
          this.createSelect('SERIE', this.detaliiFacultate[cicluStd].date[domeniu].date[program].date[valueSelected].date);
        } else {
          this.createSelect('GRUPA', this.detaliiFacultate[cicluStd].date[domeniu].date[program].date[valueSelected].date);
        }
      }
    }

    if (searchSelected === 'SERIE') {
      // this.SERIE = [];
      this.GRUPA = [];
      this.refreshArrayKeys(searchSelected);
      const cicluStd = this.searchArray.data[0].value;
      const domeniu = this.searchArray.data[1].value;

      if (cicluStd !== 'Doctorat') {
        const program = this.searchArray.data[2].value;
        const an = this.searchArray.data[3].value;

        this.createSelect('GRUPA', this.detaliiFacultate[cicluStd].date[domeniu].date[program].date[an].date[valueSelected].date);
      }
    }
  }

  // tslint:disable-next-line:typedef
  refreshArrayKeys(passedValue) {
    for (let searchRow = 0; searchRow < this.searchArray.data.length; searchRow++) {
      if (this.searchArray.data[searchRow].name === passedValue) {
        const searchRowNext = searchRow + 1;
        this.searchArray.data.splice(searchRowNext);

        // for (let searchRowNext: number = searchRow + 1; searchRowNext <= this.searchArray.data.length; searchRowNext++) {
        //   console.log(searchRowNext);
        //   this.searchArray.data.splice(searchRowNext, 1);
        // }
      }
    }
  }

  // odata ce selectam o valoare, functia asta e apelata
  // si in funtie de valoarea trimisa populam toate celelalte randuri
  // tslint:disable-next-line:typedef
  changeSelectData(passedValue) {
    if (passedValue === 'CICLU') {
      this.resetData(passedValue);
      this.assignData(passedValue, this.selectCicluStudiiFormGroup.controls[passedValue].value);

      if (this.searchArray.data[0].value !== 'Doctorat') {
        this.selectDomPSFormGroup.controls.PROGRAM.setValidators([Validators.required]);
      }

    } else if (passedValue === 'DOMENIU' || passedValue === 'PROGRAM') {
      this.resetData(passedValue);
      this.assignData(passedValue, this.selectDomPSFormGroup.controls[passedValue].value);
    } else if (passedValue === 'AN' || passedValue === 'SERIE' || passedValue === 'GRUPA') {
      this.assignData(passedValue, this.selectAnSerieGrupaFromGroup.controls[passedValue].value);
    }
    console.log('searchArray: ', this.searchArray);
  }

  // tslint:disable-next-line:typedef
  resetData(searchValue) { // resetam formul si valorile selectului..
    if (searchValue === 'CICLU') {
      this.selectDomPSFormGroup = this.formBuilder.group({
        DOMENIU: ['', Validators.required],
        PROGRAM: ['']
      });
      this.selectAnSerieGrupaFromGroup = this.formBuilder.group({
        AN: ['', Validators.required],
        SERIE: [''],
        GRUPA: ['']
      });

      this.DOMENIU = [];
      this.PROGRAM = [];
      this.AN = [];
      this.SERIE = [];
      this.GRUPA = [];
    } else if (searchValue === 'DOMENIU' || searchValue === 'PROGRAM') {
      this.selectAnSerieGrupaFromGroup = this.formBuilder.group({
        AN: ['', Validators.required],
        SERIE: [''],
        GRUPA: ['']
      });
      this.AN = [];
      this.SERIE = [];
      this.GRUPA = [];
    }
  }

}
