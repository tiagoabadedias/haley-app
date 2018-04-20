import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  message: any
  mensagemRetorno: any;

  constructor(public navCtrl: NavController, private http: Http ) {

  }

  enviar() {
    if (this.message && this.message!= "") {
   
      this.http.get('https://haley-cloud.herokuapp.com/cloud/'+this.message).map(res => res.json()).subscribe(data => {
        this.mensagemRetorno = data.mensagem;
    });

      this.message = "";
    }
  }

}
