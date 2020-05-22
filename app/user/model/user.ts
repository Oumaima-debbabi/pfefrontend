import { Role } from 'src/app/admin/model/role';


export interface User {
  statut:string,
civilite: string,
name: string,
email:string,
prenom:string,
adresse: string,
numero_telephone:string,
code_postal:string,
password:string,
annee_naissance:string,
profession:string,
photo:string,
role:Role,
nom_association:string,

 }

