import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loader:any; //ionic loader 
  public alert: any; // alert
  public auth: AuthServiceProvider;

  registerCredentials = { email: '', password: '' };//create simple object to keep users input values

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    //this.loader = this.loadingCtrl.create({ content: "Please enter your finger print..." });
    alert("please enter your finger print");
    //this.presentAlert();
    this.navCtrl.push(HomePage);
    /* if(this.auth.login(this.registerCredentials)){
      this.navCtrl.push(HomePage);
    } */
    

  }

 

}
