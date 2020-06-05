import { Secteur } from 'src/app/secteur/model/secteur';

export interface Association {
  nom_association: string;
  email: string;
  name: string;
  adresse: string;
  numero_association: string;
  numero:string,
  code_postal: string;
  password: string;
  date_creation: string;
  secteur:string;
  image: string;
  _id:string;
  isVerified:boolean,
 }

