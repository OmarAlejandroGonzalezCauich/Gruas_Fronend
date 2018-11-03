import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AssistancePage } from '../assistance/assistance'; 
import { CarsPage } from '../cars/cars';
import { HistoricPage } from '../historic/historic';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

	tab1:any;
	tab2:any;
	tab3:any;
	tab4:any;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams
  ) {
  	this.tab1 = AssistancePage;
  	this.tab2 = CarsPage;
  	this.tab3 = HistoricPage;
  	this.tab4 = SettingsPage;
  }

  ionViewDidLoad() {
  }

}
