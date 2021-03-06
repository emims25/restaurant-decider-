import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { GooglePlus } from '@ionic-native/google-plus';

import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { FavPage } from '../pages/fav/fav';
import { FavDetailPage } from '../pages/fav-detail/fav-detail';
import { WheelPage } from '../pages/wheel/wheel';
import { RestListPage } from '../pages/rest-list/rest-list';
import { ResDetailPage } from '../pages/res-detail/res-detail';
import { TabsPage } from '../pages/tabs/tabs';
import { HelpPage } from '../pages/help/help';
import { SettingsPage } from '../pages/settings/settings';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Data } from '../providers/data';
import { SafePipe} from './SafePipe';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    SigninPage,
    SignupPage,
    FavPage,
    FavDetailPage,
    SafePipe,
    SettingsPage,
    HelpPage,
    RestListPage,
    ResDetailPage,
    WheelPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    SigninPage,
    SignupPage,
    FavPage,
    FavDetailPage,
    SettingsPage,
    HelpPage,
    RestListPage,
    ResDetailPage,
    WheelPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Data,
    GooglePlus
  ]})
export class AppModule {}
