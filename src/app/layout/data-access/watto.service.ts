import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Speech, SpeechType } from '../helpers/speech';

@Injectable({
    providedIn: 'root'
})
export class WattoService {

    constructor() { }

    #speechSubject = new BehaviorSubject<Speech>({ type: 'welcome' })

    speech$ = this.#speechSubject.asObservable();

    setSpeech(type: SpeechType, inStock: boolean): void {
        this.#speechSubject.next({ type, inStock });
    }
}
