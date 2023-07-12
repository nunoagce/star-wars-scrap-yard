import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleStore } from '../../data-access/vehicle.store';
import { VehicleListElementComponent } from '../../presentation/vehicle-list-element/vehicle-list-element.component';
import { Subject, merge, debounceTime, mergeMap, startWith, switchMap, tap } from 'rxjs';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { SearchInputComponent } from '../../presentation/search-input/search-input.component';
import { PageControlsComponent } from '../../presentation/page-controls/page-controls.component';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { VehicleDetailsComponent } from '../../presentation/vehicle-details/vehicle-details.component';
import { PartsFormComponent } from 'src/app/parts/presentation/parts-form/parts-form.component';
import { ControlsOf } from 'src/app/helpers/controls-of';
import { PartsForm } from 'src/app/parts/helpers/part.form';
import { PartStore } from 'src/app/parts/data-access/part.store';

@Component({
    selector: 'app-shell',
    standalone: true,
    imports: [
        CommonModule,
        VehicleListElementComponent,
        SearchInputComponent,
        PageControlsComponent,
        ReactiveFormsModule,
        VehicleDetailsComponent,
        PartsFormComponent
    ],
    templateUrl: './shell.component.html',
    styleUrls: ['./shell.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('listAnimation', [
            transition('* => *', [
                query(':enter', style({ opacity: 0.3, transform: 'scale(0.7)' }), { optional: true }),
                query(':enter', stagger('500ms', [
                    animate('300ms', style({ opacity: 1, transform: 'scale(1)' }))
                ]), { optional: true })
            ])
        ])
    ]
})
export class ShellComponent {

    nrOfEmissions = 0;

    constructor(public vehicleStore: VehicleStore, private partStore: PartStore) { }

    searchControl = new FormControl<string>('', { nonNullable: true })

    anyControlMin1: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
        let groupValue = (control as FormGroup<ControlsOf<PartsForm>>).value;
        return (groupValue.battery! > 0 || groupValue.radiator! > 0 || groupValue.wheels! > 0)
            ? null
            : { anyControlMin1: '' }
    }

    formSubmitted = false;

    partsForm = new FormGroup<ControlsOf<PartsForm>>({
        battery: new FormControl<number>(0, { nonNullable: true, validators: [Validators.min(0)] }),
        radiator: new FormControl<number>(0, { nonNullable: true, validators: [Validators.min(0)] }),
        wheels: new FormControl<number>(0, { nonNullable: true, validators: [Validators.min(0)] }),
    }, { validators: [this.anyControlMin1] });

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

    onSubmit() {
        this.formSubmitted = true;

        if (this.partsForm.invalid) {
            return;
        }

        this.partStore.placeOrder(this.partsForm.getRawValue());
        this.partsForm.disable();
    }
}
