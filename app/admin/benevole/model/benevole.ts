import { Mission } from 'src/app/components/mission/model/mission';

export interface Benevole {
  name: string;
  email: string;
  prenom:string,
  adresse: string;
  profession:string,
  numero_telephone: string;
  code_postal: string;
  password: string;
  date_naissance: string;
  association:string,
  image: string;
  civilite:string;
  _id:string;
  missions:Array<Mission>;
 }

