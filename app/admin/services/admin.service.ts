import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Secteur } from 'src/app/secteur/model/secteur';
import { Evenement } from 'src/app/evenement/model/evenement';
import { Association } from 'src/app/association/model/association';
import { Mission } from 'src/app/mission/model/mission';
import { Partenaire } from 'src/app/partenaire/model/partenaire';
import { BenevoleComponent } from '../benevole/benevole.component';
import { Benevole } from '../benevole/model/benevole';
import { Router } from "@angular/router";
import { User } from 'src/app/user/model/user';
import { idLocale } from 'ngx-bootstrap/chronos/i18n/id';
import { stringify } from 'querystring';
import { Experience } from '../model/experience';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private httpOptions = {
    headers: new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("auth-token",localStorage.getItem("token"))
  };

      private ROOT_URL1 = "http://localhost:4000/api/evenet";
      private ROOT_URL = "http://localhost:4000/api/";
      private ROOT_URL3 = "http://localhost:4000/api/mission";
      private ROOT_URL2 = "http://localhost:4000/api/secteur";
      private ROOT_URL4 = "http://localhost:4000/api/partenaire";
      private ROOT_URL5 = "http://localhost:4000/api/benevole";
      private ROOT_URL7 = "http://localhost:4000/api/experience";
      private ROOT_URL6 = "http://localhost:4000/api/user";
associations:Association[]= new Array<Association>();

      constructor(private http: HttpClient,private router:Router ) {}

    getMissions(): Observable<Mission[]> {
        return this.http.get<Mission[]>(`${this.ROOT_URL3}`,this.httpOptions);
      }
      getmissionss(): Observable<Mission[]> {
        return this.http.get<Mission[]>(`${this.ROOT_URL3}/getmissions`);
      }
      getMission(id: string) {
        return this.http.get<Mission>(`${this.ROOT_URL3}/${id}`);
      }
      // addMission(Mission) {
      //   return this.http.post<any>(this.ROOT_URL3,Mission, this.httpOptions);
      // }
      addMission(data) {
        return this.http.post<Mission>(this.ROOT_URL3, data,this.httpOptions)
        }
    getExperiences(): Observable<Experience[]> {
      return this.http.get<Experience[]>(` ${this.ROOT_URL7}`,this.httpOptions);
    }
    getExperiencess() {
      return this.http.get(`${this.ROOT_URL7}/getexperiences`);
    }
    getExperience(id: string) {
      return this.http.get(`${this.ROOT_URL7}/${id}`);
    }
    addExperience(data) {
      return this.http.post(this.ROOT_URL7, data,this.httpOptions)
      }
      udapteEx( description,id) {
        const obj = { description };
        this.http.post(`${this.ROOT_URL7}/update/${id}`, obj)
        .subscribe(res => console.log('Update Complete'));
      }
      uploadImage(image) {
        const data = new FormData()
        data.append('image',image)
        return this.http.post(this.ROOT_URL3+'/upload', data)
      }
      getUser(id: string) {
        return this.http.get<User>(`${this.ROOT_URL6}/${id}`);
      }
      updateMission(
        nom_association1,
        sujet,
        besoin,
        etat,
        description,
        lieu,
        date,
        datefin,
        type,
        qd
      // Photo,
        ,id) {
        const obj = {
          nom_association1,sujet,besoin,etat,description,lieu,date,datefin,type,qd

        };
        this
          .http
          .post(`${this.ROOT_URL3}/update/${id}`, obj)
          .subscribe(res => console.log('Update Complete'));
      }
      deleteMission(id: string) {
        return this.http.delete(`${this.ROOT_URL3}/${id}`, this.httpOptions);
      }
      deleteEx(id: string) {
        return this.http.delete(`${this.ROOT_URL7}/${id}`);
      }

    getSecteurs() {
      return this.http.get<Secteur[]>(`${this.ROOT_URL2}`);
    }

    getSecteur(id: string) {
      return this.http.get<Secteur>(`${this.ROOT_URL2}/${id}`);
    }

    addSecteur(Secteur) {
      return this.http.post<any>(this.ROOT_URL2,Secteur, this.httpOptions);
    }

    editSecteur(secteur, id: string) {
      return this.http.put<any>(
        `${this.ROOT_URL2}/edit/${id}`,secteur,
        this.httpOptions
      );
    }
    updateSecteur(type_activite,id) {
      const obj = {
        type_activite
      };
      this
        .http
        .post(`${this.ROOT_URL2}/update/${id}`, obj)
        .subscribe(res => console.log('Update Complete'));
    }
    updateMissio(sujet,besoin,etat,description,lieu,date, datefin,type,qd,id) {
      const obj = {
        sujet,besoin,etat,description,lieu,date, datefin,type,qd
      };
      this
        .http
        .post(`${this.ROOT_URL3}/update/${id}`, obj)
        .subscribe(res => console.log('Update Complete'));
    }
    deleteSecteur(id: string) {
      return this.http.delete(`${this.ROOT_URL2}/${id}`, this.httpOptions);
    }

  getEvenements(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(`${this.ROOT_URL1}`);
  }

  getEvenement(id: string) {
    return this.http.get<Evenement>(`${this.ROOT_URL1}/${id}`);
  }

  addEvenement(Evenement) {
    return this.http.post<any>(this.ROOT_URL1,Evenement, this.httpOptions);
  }

  editEvenement(Evenement, id: string) {
    return this.http.put<any>(
      `${this.ROOT_URL1}/${id}`,
      Evenement,
      this.httpOptions
    );
  }

  deleteEvenement(id: string) {
    return this.http.delete(`${this.ROOT_URL1}/${id}`, this.httpOptions);
  }
  registration(association) {
      return this.http.post<any>(`${this.ROOT_URL}association/register`, association);
    }
    getAssociations(): Observable<Association[]> {
      return this.http.get<Association[]>(`${this.ROOT_URL}association/`,this.httpOptions);
    }
    getALlas() {
      return this.http.get(`${this.ROOT_URL}association/`,this.httpOptions);
    }
    findByTitle(nom_association) {
      return this.http.get(`${this.ROOT_URL}association/search?nom_association=${nom_association}`);
    }
    getAssociation(id: string) {
      return this.http.get<Association>(`${this.ROOT_URL}association/${id}`);
    }

    editAssociation(association, id: string) {
      return this.http.put<any>(
        `${this.ROOT_URL}${id}`,
        association,
        this.httpOptions
      );
    }

    deleteAssociation(id: string) {
      return this.http.delete(`${this.ROOT_URL}association/${id}`, this.httpOptions);
    }

    getPartenaires(): Observable<Partenaire[]> {
      return this.http.get<Partenaire[]>(`${this.ROOT_URL4}`);
    }

    getPartenaire(id: string) {
      return this.http.get<Partenaire>(`${this.ROOT_URL4}/${id}`);
    }

    addPartenaire(data) {
      return this.http.post<Partenaire>(this.ROOT_URL4, data)

    }

    editPartenaire(nom,imageUrl,id) {
      const obj = {
        nom,imageUrl
        // Photo,

      };
      this
        .http
        .post(`${this.ROOT_URL4}/update/${id}`, obj)
        .subscribe(res => console.log('Update Complete'));
    }

    deletePartenaire(id: string) {
      return this.http.delete(`${this.ROOT_URL4}/${id}`, this.httpOptions);
    }

    getBenevoles(): Observable<Benevole[]> {
      return this.http.get<Benevole[]>(`${this.ROOT_URL5}`);
    }

    getBenevole(id: string) {
      return this.http.get<Benevole>(`${this.ROOT_URL5}/${id}`);
    }

    addBenevole(data) {
      return this.http.post<any>(`${this.ROOT_URL5}/register/`,data, this.httpOptions);
    }

    editBenevole(benevole, id: string) {
      return this.http.put<any>(
        `${this.ROOT_URL5}/edit/${id}`,benevole,
        this.httpOptions
      );
    }
  updateBenevole(name, prenom,association,
   profession,

      civilite,
      adresse, code_postal,
      numero_telephone,

      annee_naissance
      , id) {
      const obj = {name, prenom,association,
        profession,

           civilite,
           adresse, code_postal,
           numero_telephone,

           annee_naissance }
        ;this
        .http
        .post(`${this.ROOT_URL5}/update/${id}`, obj)
        .subscribe(res => console.log('Update Complete'));
    }

    deleteBenevole(id: string) {
      return this.http.delete(`${this.ROOT_URL5}/${id}`, this.httpOptions);
    }

    editUser( name, prenom,profession, civilite, adresse,code_postal,annee_naissance,numero_telephone,id) {
        const obj = {
          name, prenom,profession, civilite, adresse,code_postal,annee_naissance,numero_telephone,
          // Photo,

        };
        this
          .http
          .post(`${this.ROOT_URL6}/update/${id}`, obj)
          .subscribe(res => console.log('Update Complete'));
      }
      updatephoto(
       imageUrl
      // Photo,
        ,id) {
        const obj = {
          imageUrl
        };
        this
          .http
          .post(`${this.ROOT_URL6}/updateProfil/${id}`, obj)
          .subscribe(res => console.log('Update Complete'));
      }

      updatePhot(data,id) {


        return this.http.post<User>(`${this.ROOT_URL6}/updatePhoto/${id}`, data)
        }
    // login(user) {
    //   return this.http.post<any>(`${this.ROOT_URL6}/login`, user);
    // }
    // logOut() {
    //   localStorage.removeItem("token");
    //   this.router.navigate(["/profil"]);
    // }

    // loggedIn() {
    //   return !!localStorage.getItem("token");
    // }

}


