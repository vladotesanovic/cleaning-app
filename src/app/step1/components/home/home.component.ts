import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { OfferService } from '../../../shared/services/offer.service';
import { Offer } from '../../../shared/services/offer.model';

@Component({
  selector: 'capp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  readonly serviceCost = 25;
  offer$: Observable<Offer>;

  constructor(private readonly router: Router, private readonly offerService: OfferService) { }

  ngOnInit() {
    this.offer$ = this.offerService.getOfferObserver();
  }

  goToStep2() {
    this.router.navigateByUrl('/step2');
  }

  onIncreaseBad(amount) {
    this.offerService.setBed(amount * this.serviceCost);
  }

  onDecreaseBad(amount) {
    this.offerService.unsetBed(amount * this.serviceCost);
  }

  onIncreaseBath(amount) {
    this.offerService.setBaths(amount * this.serviceCost);
  }

  onDecreaseBath(amount) {
    this.offerService.unsetBaths(amount * this.serviceCost);
  }

}
