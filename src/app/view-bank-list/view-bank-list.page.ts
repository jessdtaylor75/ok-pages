import { Component, OnInit } from '@angular/core';
import { PlaidAccountSubtypes } from 'ng-plaid-link/lib/interfaces';

@Component({
  selector: 'app-view-bank-list',
  templateUrl: './view-bank-list.page.html',
  styleUrls: ['./view-bank-list.page.scss'],
})
export class ViewBankListPage implements OnInit {
  plaidAccountSubtypes: PlaidAccountSubtypes = {depository: ['checking']};

  constructor() { }

  ngOnInit() {
  }

  // noinspection JSUnusedLocalSymbols
  onPlaidSuccess($event: any) {}
}
