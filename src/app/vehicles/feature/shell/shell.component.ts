import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleStore } from '../../data-access/vehicle.store';
import { VehicleListElementComponent } from '../../presentation/vehicle-list-element/vehicle-list-element.component';
import { Subject, merge, debounceTime, mergeMap, startWith, switchMap, tap } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SearchInputComponent } from '../../presentation/search-input/search-input.component';
import { PageControlsComponent } from '../../presentation/page-controls/page-controls.component';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { VehicleDetailsComponent } from '../../presentation/vehicle-details/vehicle-details.component';

@Component({
    selector: 'app-shell',
    standalone: true,
    imports: [
        CommonModule,
        VehicleListElementComponent,
        SearchInputComponent,
        PageControlsComponent,
        ReactiveFormsModule,
        VehicleDetailsComponent
    ],
    templateUrl: './shell.component.html',
    styleUrls: ['./shell.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('listAnimation', [
            transition('* => *', [
                query(':enter', style({ opacity: 0.3, transform: 'scale(0.7)' })),
                query(':enter', stagger('300ms', [
                    animate('300ms', style({ opacity: 1, transform: 'scale(1)' }))
                ]))
            ])
        ])
    ]
})
export class ShellComponent {

    nrOfEmissions = 0;

    constructor(public vehicleStore: VehicleStore) { }

    searchControl = new FormControl<string>('', { nonNullable: true })
    changePageSubject = new Subject<'next' | 'previous'>();

    vehicles$ = merge(
        this.searchControl.valueChanges.pipe(
            startWith(''),
            debounceTime(500),
            switchMap((term) => this.vehicleStore.search(term))
        ),
        this.changePageSubject.asObservable().pipe(
            mergeMap((direction) => direction == 'next'
                ? this.vehicleStore.readNextPage()
                : this.vehicleStore.readPreviousPage())
        )
    ).pipe(tap(() => this.nrOfEmissions++))

    pageNavigation$ = this.vehicleStore.pageNavigation$;
}
