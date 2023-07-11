import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-search-input',
    standalone: true,
    imports: [CommonModule,
        ReactiveFormsModule],
    templateUrl: './search-input.component.html',
    styleUrls: ['./search-input.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInputComponent implements OnInit {

    @Input() control!: FormControl<string>;

    ngOnInit(): void {
        if (!this.control) {
            throw new Error("missing control input in search input");
        }
    }

}
