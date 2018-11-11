import { Component, OnInit, ElementRef } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ServicesService } from 'src/app/services/services.service';
import {MatSnackBar} from '@angular/material';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  username = new FormControl('', [
    Validators.required
  ]);
  password = new FormControl('', [
    Validators.required
  ]);
  rePassword = new FormControl('', [
    Validators.required
  ]);
  dateOfBirth = new FormControl('', [
    Validators.required
  ])
  matcher = new MyErrorStateMatcher();
  imagesURL:string  = '../../assets/images/yoda.png';
  constructor(
    private _services:ServicesService,
    private _snackBar:MatSnackBar,
    private _element:ElementRef,
    private _auth:AuthService,
    private _router:Router,
    private _http:HttpClient
  ) { }

  ngOnInit() {
    window.scrollTo(0,0)
  }


  onChange(file:any){
    for (var i = 0; i < file.length; i++) {
      var fi = file[i];
      var imageReader = new FileReader();
      imageReader.onload = (event:any)=>{
        this.imagesURL = event.target.result;
        }
      imageReader.readAsDataURL(fi);
      }
    }

    onRegisterSubmit() {
      if (this.username.hasError('required')){
        this._snackBar.open('plz check username filde', 'Undo', {
          duration: 3000
        });
        return false
      }
      if (this.email.hasError('required')){
        this._snackBar.open('plz check email filde', 'Undo', {
          duration: 3000
        });
        return false

      }
      if (this.email.hasError('email')){
        this._snackBar.open('plz check email filde and enter valid email', 'Undo', {
          duration: 3000
        });
        return false

      }
      if (this.dateOfBirth.hasError('required')){
        this._snackBar.open('plz check date of birth filde', 'Undo', {
          duration: 3000
        });
        return false

      }
      if (this.password.hasError('required')){
        this._snackBar.open('plz check password filde', 'Undo', {
          duration: 3000
        });
        return false

      }
      if (this.rePassword.hasError('required')){
        this._snackBar.open('plz check re password filde', 'Undo', {
          duration: 3000
        });
      }

      if (this.password.value != this.rePassword.value) {
        this._snackBar.open('plz make shure password filde is equal re password', 'Undo', {
          duration: 3000
        }); 
        return false
      }  
      let inputEl: HTMLInputElement = this._element.nativeElement.querySelector('#photo');


      var formData = new FormData();
  //  //create a new fromdata instance
      if (inputEl.files.length !== 1) {
      this._snackBar.open('plz select image', 'Undo', {
        duration: 3000
      });
        return false;
    }
    
    formData.append('username', this.username.value)
    formData.append('dateOfBirth',this.dateOfBirth.value)
    formData.append('password', this.password.value)
    formData.append('email', this.email.value)
    formData.append('photo', inputEl.files.item(0))
    // this._http.post('http://localhost:3000/users/register', formData).subscribe(res=>{console.log(res)})

    this._auth.registerUser(formData).subscribe((data:any) => {
    if(data.success) {
      this._router.navigate(['/login']);
      this._snackBar.open(data.MSG, 'Undo', {
        duration: 3000
      }); 
    }else{
      this._snackBar.open(data.errMSG, 'Undo', {
        duration: 3000
      }); 
    }
  },
  (error)=>{
    this._snackBar.open(error.message, 'Undo', {
      duration: 3000
    })
    });

  }
}
