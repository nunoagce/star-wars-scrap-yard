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

    selectPart(title: string, inStock: boolean): void {
        const current = this.#speechSubject.getValue();
        current.selectedPart = title;
        current.inStock = inStock
        this.#speechSubject.next(current);
    }

    resetSelection() {
        const current = this.#speechSubject.getValue();
        if (!current.searchTerm && !current.selectedPart) {
            return;
        }
        this.#speechSubject.next({ searchTerm: current.searchTerm });
    }
}
