import { Mission } from 'src/app/components/mission/model/mission';
import { Association } from 'src/app/association/model/association';

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
  association:Association,
  imageUrl: string;
  civilite:string;
  _id:string;
  missions:Array<Mission>;
 }

