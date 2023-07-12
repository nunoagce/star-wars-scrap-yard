/* tslint:disable:no-unused-variable */

import { TestBed, waitForAsync } from '@angular/core/testing';
import { WattoService } from './watto.service';

describe('Service: Watto', () => {
    let service: WattoService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [WattoService]
        });
        service = TestBed.inject(WattoService)
    });

    it('service should be initialized', () => {
        expect(service).toBeTruthy();
    });
    it('speech$ should be initialized', () => {
        expect(service.speech$).toBeDefined()
    });

    it('when search occurs speech$ should be updated to match term and inStock values received', waitForAsync(() => {
        let term = 'bla';
        let inStock = false;
        let beforeSearch = true;
        service.speech$.subscribe(value => {
            if (beforeSearch) return;
            expect(value.searchTerm).toBe(term)
            expect(value.inStock).toBe(inStock)
        })
        beforeSearch = false
        service.setSearch(term, inStock)
    }));

    it('when selecting a vehicle speech$ should be updated to match title and inStock values received', waitForAsync(() => {
        let title = 'bla';
        let inStock = true;
        let beforeSelecting = true;
        service.speech$.subscribe(value => {
            if (beforeSelecting) return;
            expect(value.selectedVehicle).toBe(title)
            expect(value.inStock).toBe(inStock)
        })
        beforeSelecting = false;
        service.selectVehicle(title, inStock)
    }));
});
