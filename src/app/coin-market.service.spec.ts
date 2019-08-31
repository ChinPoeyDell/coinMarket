import { TestBed } from '@angular/core/testing';

import { CoinMarketService } from './coin-market.service';

describe('CoinMarketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoinMarketService = TestBed.get(CoinMarketService);
    expect(service).toBeTruthy();
  });
});
