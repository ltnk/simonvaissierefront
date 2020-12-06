import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as firebase from 'firebase';
import { ClientMessage } from '../models/client-message.model';
import { Subject } from 'rxjs';

//
import { HttpService } from '../Shared/http.service';

@Component({
  selector: 'app-sim-contact',
  templateUrl: './sim-contact.component.html',
  styleUrls: ['./sim-contact.component.scss'],
})
export class SimContactComponent implements OnInit {
  formSent = false;

  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [
    Validators.required,
    Validators.pattern(/[0-9a-zA-Z]{2,}/),
  ]);
  subject = new FormControl('', [
    Validators.required,
    Validators.pattern(/[0-9a-zA-Z]{1,}/),
  ]);
  message = new FormControl('', [
    Validators.required,
    Validators.pattern(/[0-9a-zA-Z]{1,}/),
  ]);
  captcha = new FormControl();

  recaptcha: any[];

  clientMessages: ClientMessage[] = [];
  clientMessagesSubject = new Subject<ClientMessage[]>();

  clientMessage = {
    email: this.email.value,
    name: this.name.value,
    subject: this.subject.value,
    message: this.message.value,
  };

  resolved(captchaResponse: any[]) {
    this.recaptcha = captchaResponse;
    console.log(this.recaptcha);
  }

  constructor(public http: HttpService) {}
  ngOnInit() {}

  getErrorMessage() {
    return this.email.hasError('required')
      ? `L'email est obligatoire !`
      : this.email.hasError('email')
      ? `Votre adresse mail n'est pas valide. Merci de vérifier !`
      : '';
  }

  submitForm() {
    if (
      this.email.valid &&
      this.subject.valid &&
      this.name.valid &&
      this.message.valid
    ) {
      this.clientMessage.email = this.email.value;
      this.clientMessage.name = this.name.value;
      this.clientMessage.subject = this.subject.value;
      this.clientMessage.message = this.message.value;

      firebase
        .database()
        .ref('/clientMessage')
        .push(this.clientMessage);

      const user = {
        name: this.name.value,
        email: this.email.value,
        subject: this.subject.value,
        message: this.message.value,
      };

      this.http.sendEmail('http://localhost:3000/sendmail', user).subscribe(
        data => {
          const res: any = data;
          console.log(
            `${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
          );
        },
        err => {
          console.log('ERROR:', err);
        }
      );
      this.formSent = true;
    }
  }

  //

  /*   register() {
    this.loading = true;
    this.buttionText = 'Submiting...';
    let user = {
      name: this.name.value,
      email: this.email.value,
    };
    this.http.sendEmail('http://localhost:3000/sendmail', user).subscribe(
      data => {
        let res: any = data;
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
        this.loading = false;
        this.buttionText = 'Submit';
      },
      () => {
        this.loading = false;
        this.buttionText = 'Submit';
      }
    );
  } */
}
