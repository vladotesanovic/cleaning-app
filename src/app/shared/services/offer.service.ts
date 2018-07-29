import { Injectable } from '@angular/core';

import { Offer } from './offer.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  private offer: Offer;
  private offer$: BehaviorSubject<Offer>;

  constructor() {
    this.offer = new Offer();
    this.offer$ = new BehaviorSubject<Offer>(this.offer);
  }

  setTime(timeSpan) {
    this.offer.time = timeSpan;
    this.updateOffer();
  }

  now() {
    this.offer.when = new Date();
    this.updateOffer();
  }

  setDate(date) {
    this.offer.when = date;
    this.updateOffer();
  }

  toggleWindow(amount: number) {
    this.offer.windows = !this.offer.windows;
    const division = (this.offer.windows === true) ? 1 : -1;

    this.setTotal(amount * division);
  }

  toggleIroning(amount: number) {
    this.offer.ironing = !this.offer.ironing;
    const division = (this.offer.ironing === true) ? 1 : -1;

    this.setTotal(amount * division);
  }

  toggleFridge(amount: number) {
    this.offer.fridge = !this.offer.fridge;
    const division = (this.offer.fridge === true) ? 1 : -1;

    this.setTotal(amount * division);
  }

  toggleOven(amount: number) {
    this.offer.oven = !this.offer.oven;
    const division = (this.offer.oven === true) ? 1 : -1;

    this.setTotal(amount * division);
  }

  setBed(amount: number) {
    this.offer.beds += 1;

    this.setTotal(amount);
  }

  unsetBed(amount: number) {
    if (this.offer.beds - 1 < 0) {
      return;
    }

    this.offer.beds -= 1;
    this.setTotal(amount * -1);
  }

  setBaths(amount: number) {
    this.offer.baths += 1;

    this.setTotal(amount);
  }

  unsetBaths(amount: number) {
    if (this.offer.baths - 1 < 0) {
      return;
    }

    this.offer.baths -= 1;
    this.setTotal(amount * -1);
  }

  private setTotal(amount: number) {
    if ((this.offer.total + amount) < 0 ) {
      return;
    }

    this.offer.total += amount;
    this.updateOffer();
  }

  private updateOffer() {
    this.offer$.next(this.offer);
  }

  getOfferObserver() {
    return this.offer$.asObservable();
  }

  reset() {
    this.offer = new Offer();
    this.offer$ = new BehaviorSubject<Offer>(this.offer);
  }
}
