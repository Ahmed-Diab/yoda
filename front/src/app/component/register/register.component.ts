import { Component, OnInit, ElementRef } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ServicesService } from 'src/app/services/services.service';
import {MatSnackBar} from '@angular/material';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

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

  emailForm = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  usernameForm = new FormControl('', [
    Validators.required
  ]);
  passwordForm = new FormControl('', [
    Validators.required
  ]);
  rePasswordForm = new FormControl('', [
    Validators.required
  ]);
  dateOfBirthForm = new FormControl('', [
    Validators.required
  ])
  username:string;
  password:string;
  rePassword:string;
  dateOfBirth:Date;
  email:string
  matcher = new MyErrorStateMatcher();
  imagesURL:string  = '../../assets/images/yoda.png';
  constructor(
    private _services:ServicesService,
    private _snackBar:MatSnackBar,
    private _element:ElementRef,
    private _auth:AuthService,
    private _router:Router
  ) { }

  ngOnInit() {
    this._services.changePathName('')
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
      if (this.usernameForm.hasError('required')){
        this._snackBar.open('plz check username filde', 'Undo', {
          duration: 3000
        });
        return false
      }
      if (this.emailForm.hasError('required')){
        this._snackBar.open('plz check email filde', 'Undo', {
          duration: 3000
        });
        return false

      }
      if (this.emailForm.hasError('email')){
        this._snackBar.open('plz check email filde and enter valid email', 'Undo', {
          duration: 3000
        });
        return false

      }
      if (this.dateOfBirthForm.hasError('required')){
        this._snackBar.open('plz check date of birth filde', 'Undo', {
          duration: 3000
        });
        return false

      }
      if (this.passwordForm.hasError('required')){
        this._snackBar.open('plz check password filde', 'Undo', {
          duration: 3000
        });
        return false

      }
      if (this.rePasswordForm.hasError('required')){
        this._snackBar.open('plz check re password filde', 'Undo', {
          duration: 3000
        });
      }

      if (this.password != this.rePassword) {
        this._snackBar.open('plz make shure password filde is equal re password', 'Undo', {
          duration: 3000
        }); 
        return false
      }  
      let inputEl: HTMLInputElement = this._element.nativeElement.querySelector('#userImage');
      var formData = new FormData();
  //  //create a new fromdata instance
      if (inputEl.files.length !== 1) {
      this._snackBar.open('plz select image', 'Undo', {
        duration: 3000
      });
        return false;
    }
    
         formData.append("userImage", inputEl.files.item(0));
         formData.append('username', JSON.stringify(this.username))
         formData.append('dateOfBirth',JSON.stringify(this.dateOfBirth))
         formData.append('password', this.password)
         formData.append('email', this.email)
    this._auth.registerUser(formData).subscribe((data:any) => {
      alert(data)
    if(data.success) {
      this._router.navigate(['/login']);
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
