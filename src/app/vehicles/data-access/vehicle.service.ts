import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, of, tap } from 'rxjs';
import { Vehicle } from '../helpers/vehicle';
import { ApiResponse } from '../helpers/api-response';

@Injectable({ providedIn: 'root' })
export class VehicleService {
    get #basePath() { return 'https://swapi.dev/api/vehicles/'; }
    #previousUrl = new BehaviorSubject<string | null>(null);
    #nextUrl = new BehaviorSubject<string | null>(null);
    #count$ = new BehaviorSubject(0);
    previousUrl$ = this.#previousUrl.asObservable();
    nextUrl$ = this.#nextUrl.asObservable();
    count$ = this.#count$.asObservable();

    constructor(private httpClient: HttpClient) { }

    search(searchTerm: string): Observable<Vehicle[]> {
        return this.httpClient.get<ApiResponse<Vehicle>>(this.#basePath, { params: { search: searchTerm } })
            .pipe(
                tap((response) => {
                    this.#previousUrl.next(response.previous)
                    this.#nextUrl.next(response.next)
                    this.#count$.next(response.count)
                }),
                map((response) => response.results)
            );
    }

    #searchByUrl(url: string): Observable<Vehicle[]> {
        return this.httpClient.get<ApiResponse<Vehicle>>(url)
            .pipe(
                tap((response) => {
                    this.#previousUrl.next(response.previous)
                    this.#nextUrl.next(response.next)
                    this.#count$.next(response.count)
                }),
                map((response) => response.results)
            );
    }

    getPreviousPage(): Observable<Vehicle[]> {
        const url = this.#previousUrl.getValue();
        if (!url) {
            throw new Error("previousUrl undefined");
        }
        return this.#searchByUrl(url)
    }

    getNextPage(): Observable<Vehicle[]> {
        const url = this.#nextUrl.getValue();
        if (!url) {
            throw new Error("nextUrl undefined");
        }
        return this.#searchByUrl(url)
    }

}