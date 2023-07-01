import { Component, OnInit } from '@angular/core';
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';


@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {


  attributes: CognitoUserAttribute[];
  poolData = {
    UserPoolId: environment.UserPoolId, // Your user pool id here
    ClientId: environment.ClientId, // Your client id here
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onLogout(): void {
    var userPool = new CognitoUserPool(this.poolData);
    var currentUser = userPool.getCurrentUser();
    currentUser.signOut();
    this.router.navigate(['Comics']);
  }

  getAttributes(): void {
    var userPool = new CognitoUserPool(this.poolData);
    var currentUser = userPool.getCurrentUser();
    currentUser.getSession((err: any, session: any) => {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      currentUser.getUserAttributes((err, result) => {
        if (err) {
          alert(err.message || JSON.stringify(err));
          return;
        }
        this.attributes = result;
        this.attributes.forEach((attr: CognitoUserAttribute) => console.log(attr.Name + ' = ' + attr.Value));
      });
    });
  }
}


