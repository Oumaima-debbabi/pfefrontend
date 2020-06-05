import { Component, OnInit } from '@angular/core';
import { Admin } from '../model/admin';
import { UserService } from 'src/app/user/service/user.service';
import { Observable } from 'rxjs';
import { AdminService } from '../services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  _id: string;
  currentUser: Admin;
  user: any = {};
  formDirty: boolean = false
  user$:Observable<Admin[]>
  constructor(private userS:UserService,private ad:AdminService,private route:ActivatedRoute,
    private router:Router,
  private  usr:AdminService) { }
imageUrl = ''
handleChange() {
  this.formDirty = true;
}
addPost(): void {
  const data = {
    imageUrl: this.imageUrl
  }

  this.ad.updatePhot(data,this.currentUser._id)
    .subscribe(() => {
      this.imageUrl='';

      this.formDirty = false;

    })
console.log(data,this.currentUser)
}
  ngOnInit() {
//
    this.route.params.subscribe(params => {
      this.ad.getUser(params.id).subscribe(res => {
        this.user = res;
    });
  });

    //this.currentUser = JSON.parse(localStorage.getItem('user'));
    this.currentUser = this.userS.currentUserValue;

  }
  updateUser( imageUrl, id) {
    this.route.params.subscribe(params => {
      this.ad.updatephoto(this.imageUrl,params.id);
      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: true,
        timer: 3000
      });
      Toast.fire({
  title:'image modifié avec succés'

      })
      this.router.navigate(['/admin/profil']);
    });
  }
   uploadImages(event) {
   this.ad.uploadImage(event.target.files[0])
      .subscribe((res: any) => {
        this.imageUrl = res.imageUrl
     })
   }
  // onSelectFile(event) {
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();

  //     reader.readAsDataURL(event.target.files[0]); // read file as data url

  //     reader.onload = (event) => { // called once readAsDataURL is completed
  //       this.imageUrl = event.target.result;
  //     }
  //   }
  // }

}

