import { Component, OnInit } from '@angular/core';
import { Offer } from '../../../shared/services/offer.model';
import { OfferService } from '../../../shared/services/offer.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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

  chooseTime(timeSpan) {
    this.offerService.setTime(timeSpan);
  }

  goToHome() {
    this.router.navigateByUrl('/step1');
  }

}
