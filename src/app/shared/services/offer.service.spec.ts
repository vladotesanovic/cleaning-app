import { TestBed, inject } from '@angular/core/testing';

import { OfferService } from './offer.service';

describe('OfferService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfferService]
    });
  });

  it('should be created', inject([OfferService], (service: OfferService) => {
    expect(service).toBeTruthy();
  }));
});
