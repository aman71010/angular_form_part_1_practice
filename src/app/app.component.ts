import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') sigupForm: NgForm;
  defaultOption = 'teacher';
  answer = '';
  genders = ['male', 'female'];
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.sigupForm.setValue({
    //   userdata: {
    //     email: 'aryagupta@gmail.com',
    //     username: 'arya'
    //   },
    //   gender: 'female',
    //   secret: 'pet',
    //   answer: 'tommy'
    // });
    this.sigupForm.form.patchValue({
      userdata: {
        username: suggestedName
      }
    });
  }

  user = {
    userdata: {
      username: '',
      email: ''
    },
    gender: '',
    secret: '',
    answer: ''
  }

  // onSubmit(form: HTMLFormControlsCollection){
  //   console.log(form);
  // }

  onSubmit(){
    this.submitted = true;
    console.log(this.sigupForm);
    this.user.userdata.username = this.sigupForm.value.userdata.username
    this.user.userdata.email = this.sigupForm.value.userdata.email
    this.user.gender = this.sigupForm.value.gender
    this.user.secret = this.sigupForm.value.secret
    this.user.answer = this.sigupForm.value.answer
    this.sigupForm.reset();
  }

}
