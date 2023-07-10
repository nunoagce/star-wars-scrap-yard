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
        this.#speechSubject.next({ searchTerm: this.#speechSubject.getValue().searchTerm });
    }
}
