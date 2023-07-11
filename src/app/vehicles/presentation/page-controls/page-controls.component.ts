import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-page-controls',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './page-controls.component.html',
    styleUrls: ['./page-controls.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageControlsComponent {
    @Input() canClickPrevious!: boolean;
    @Input() canClickNext!: boolean;
    @Output() onPrevious = new EventEmitter();
    @Output() onNext = new EventEmitter();

    ngOnInit(): void {
        if (this.canClickPrevious == undefined) {
            throw new Error("missing canClickPrevious input in page controls");
        }
        if (this.canClickNext == undefined) {
            throw new Error("missing canClickNext input in page controls");
        }
    }

}
