import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ControlsOf } from 'src/app/helpers/controls-of';
import { PartsForm } from '../../helpers/part.form';

@Component({
    selector: 'app-parts-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './parts-form.component.html',
    styleUrls: ['./parts-form.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartsFormComponent implements OnInit {

    @Input() form!: FormGroup<ControlsOf<PartsForm>>;
    @Input() submitted: boolean = false;

    ngOnInit(): void {
        if (!this.form) {
            throw new Error('missing form input');
        }
    }

}
