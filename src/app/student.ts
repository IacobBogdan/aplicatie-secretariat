export class Student {
  idPersoana: number;
  numeNastere: string;
  numeActual: string;
  prenume: string;
  emailTUIASI: string;
  initialaParinte?: string;
  idStudiu?: number;
  facultate?: string;
  ciclu?: string;
  domeniu?: string;
  program?: string;
  an?: string;
  serie?: string;
  grupa?: string;
  detalii?: boolean;
}

export class SearchData {
  constructor(searchField?: {id: number; value: string, name: string}) {
    if (searchField) {
      this.id = searchField.id;
      this.value = searchField.value;
      this.name = searchField.name;
    }
  }
  id: number;
  value: string;
  name: string;
}

export class SearchArray {
  data: SearchData[] = new Array();
}

// export interface SearchData {
//   CICLU?: {CICLU: string, id: number};
//   DOMENIU?: {DOMENIU: string, id: number};
//   PROGRAM?: {PROGRAM: string, id: number};
//   AN?: {AN: string, id: number};
//   SERIE?: {SERIE: string, id: number};
//   GRUPA?: {GRUPA: string, id: number};
// }

// export const Students = [
//   {
//     idStudent: '1',
//     numeStudent: 'Person 1',
//     anStudiu: 'IV',
//     programStudiu: 'AIA',
//     grupa: '1401B',
//     detalii: false
//   },
//   {
//     idStudent: '2',
//     numeStudent: 'Person 2',
//     anStudiu: 'I',
//     programStudiu: 'SEIII',
//     grupa: '55SEIII',
//     detalii: false
//   },
//   {
//     idStudent: '3',
//     numeStudent: 'Person 3',
//     anStudiu: 'IV',
//     programStudiu: 'AIA',
//     grupa: '1401B',
//     detalii: false
//   },
//   {
//     idStudent: '4',
//     numeStudent: 'Person 4',
//     anStudiu: 'I',
//     programStudiu: 'SEIII',
//     grupa: '55SEIII',
//     detalii: false
//   },
//   {
//     idStudent: '6',
//     numeStudent: 'Person 5',
//     anStudiu: 'IV',
//     programStudiu: 'AIA',
//     grupa: '1401B',
//     detalii: false
//   },
//   {
//     idStudent: '7',
//     numeStudent: 'Person 6',
//     anStudiu: 'I',
//     programStudiu: 'SEIII',
//     grupa: '55SEIII',
//     detalii: false
//   },
//   {
//     idStudent: '8',

//     numeStudent: 'Person 7',
//     anStudiu: 'IV',
//     programStudiu: 'AIA',
//     grupa: '1401B',
//     detalii: false
//   },
//   {
//     idStudent: '9',
//     numeStudent: 'Person 8',
//     anStudiu: 'I',
//     programStudiu: 'SEIII',
//     grupa: '55SEIII',
//     detalii: false
//   }
// ];
