/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WattoService } from './watto.service';

describe('Service: Watto', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WattoService]
    });
  });

  it('should ...', inject([WattoService], (service: WattoService) => {
    expect(service).toBeTruthy();
  }));
});
