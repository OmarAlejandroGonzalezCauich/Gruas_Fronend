var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1 = AssistancePage;
        this.tab2 = CarsPage;
        this.tab3 = HistoricPage;
        this.tab4 = SettingsPage;
    }
    TabsPage.prototype.ionViewDidLoad = function () {
    };
    TabsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-tabs',
            templateUrl: 'tabs.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams])
    ], TabsPage);
    return TabsPage;
}());
export { TabsPage };
//# sourceMappingURL=tabs.js.map