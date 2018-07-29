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

  offer$: Observable<Offer>;
  isNow = false;

  constructor(private readonly router: Router, private readonly offerService: OfferService) { }

  ngOnInit() {
    this.offer$ = this.offerService.getOfferObserver();
  }

  goToFinalStep() {
    this.router.navigateByUrl('/final');
  }

  now() {
    this.isNow = true;
    this.offerService.now();
  }

  setThen() {
    this.isNow = false;
  }

  onDateChange(data) {
    this.offerService.setDate(new Date(data.target.value));
  }

}
