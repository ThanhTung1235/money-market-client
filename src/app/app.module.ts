import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.route';
import { CoinListComponent } from './component/coin/coin-list/coin-list.component';
import { AddCoinComponent } from './component/coin/add-coin/add-coin.component';
import { MarketListComponent } from './component/market/market-list/market-list.component';
import { AddMarketComponent } from './component/market/add-market/add-market.component';

@NgModule({
  declarations: [
    AppComponent,
    CoinListComponent,
    AddCoinComponent,
    MarketListComponent,
    AddMarketComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
