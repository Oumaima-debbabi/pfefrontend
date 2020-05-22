import { Role } from "./role";

export interface Admin {
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
_id:string
 }

