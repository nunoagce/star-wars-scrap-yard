import { Injectable } from '@angular/core';
import { VehicleService } from './vehicle.service';
import { WattoService } from 'src/app/layout/data-access/watto.service';
import { BehaviorSubject, Observable, combineLatest, map, tap } from 'rxjs';
import { Vehicle } from '../helpers/vehicle';

@Injectable({ providedIn: 'root' })
export class VehicleStore {

    constructor(
        private vehicleService: VehicleService,
        private wattoService: WattoService
    ) { }

    #loadingSubject = new BehaviorSubject<boolean>(false);
    #selectedSubject = new BehaviorSubject<Vehicle | null>(null);
    selected$ = this.#selectedSubject.asObservable();
    count$ = this.vehicleService.count$;
    pageNavigation$ = combineLatest({
        loading: this.#loadingSubject.asObservable(),
        hasNextUrl: this.vehicleService.nextUrl$.pipe(map((url) => url != null)),
        hasPreviousUrl: this.vehicleService.previousUrl$.pipe(map((url) => url != null)),
    }).pipe(map((value) => {
        return {
            canClickNext: !value.loading && value.hasNextUrl,
            canClickPrevious: !value.loading && value.hasPreviousUrl,
        }
    }))

    search(term: string): Observable<Vehicle[]> {
        this.#loadingSubject.next(true);
        return this.vehicleService.search(term)
            .pipe(tap((results) => {
                this.#loadingSubject.next(false);
                if (term) {
                    this.wattoService.setSearch(term, results.length > 0)
                    return;
                }
                this.wattoService.resetSelection();
            }))
    }

    readPreviousPage(): Observable<Vehicle[]> {
        this.#loadingSubject.next(true);
        return this.vehicleService.getPreviousPage()
            .pipe(tap(() => this.#loadingSubject.next(false)));
    }

    readNextPage(): Observable<Vehicle[]> {
        this.#loadingSubject.next(true);
        return this.vehicleService.getNextPage()
            .pipe(tap(() => this.#loadingSubject.next(false)));
    }

    select(vehicle: Vehicle): void {
        const inStock = Math.random() < 0.7;
        this.wattoService.selectVehicle(vehicle.name, inStock)
        this.#selectedSubject.next(inStock ? vehicle : null)
    }
}