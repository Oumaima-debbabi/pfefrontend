import { Secteur } from 'src/app/secteur/model/secteur';

export interface Association {
  _id:string,
  nom_association:string,
  role:string,
  email:string,
  emailasso:string,
  password:string,
secteur:Secteur,
name:string,
imageUrl:string
prenom:string,
adresse:string,
numero_association:string,
code_postal:string,
date_creation:string,
adresse_asso:string,
profession:string,
annee_naissance:string,
numero_telephone:string,
civilite:string,
  isVerified:boolean,
 }

