import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Speech } from '../helpers/speech';

@Injectable({
    providedIn: 'root'
})
export class WattoService {

    constructor() { }

    #speechSubject = new BehaviorSubject<Speech>({});

    speech$ = this.#speechSubject.asObservable();

    setSearch(term: string, inStock: boolean): void {
        this.#speechSubject.next({ searchTerm: term, inStock: inStock });
    }

    selectVehicle(title: string, inStock: boolean): void {
        this.#speechSubject.next({ selectedVehicle: title, inStock: inStock });
    }

    resetSelection() {
        const current = this.#speechSubject.getValue();
        if (!current.searchTerm && !current.selectedVehicle) {
            return;
        }
        this.#speechSubject.next({ searchTerm: current.searchTerm });
    }

    placeOrder() {
        const current = this.#speechSubject.getValue();
        current.orderPlaced = true;
        this.#speechSubject.next(current);
    }

}
