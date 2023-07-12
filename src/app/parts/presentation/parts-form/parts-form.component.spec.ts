import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsFormComponent } from './parts-form.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ControlsOf } from 'src/app/helpers/controls-of';
import { PartsForm } from '../../helpers/part.form';

describe('PartsFormComponent', () => {
    let component: PartsFormComponent;
    let fixture: ComponentFixture<PartsFormComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [PartsFormComponent]
        });
        fixture = TestBed.createComponent(PartsFormComponent);
        component = fixture.componentInstance;
        component.form = new FormGroup<ControlsOf<PartsForm>>({
            battery: new FormControl<number>(0, { nonNullable: true }),
            radiator: new FormControl<number>(0, { nonNullable: true }),
            wheels: new FormControl<number>(0, { nonNullable: true }),
        });

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
