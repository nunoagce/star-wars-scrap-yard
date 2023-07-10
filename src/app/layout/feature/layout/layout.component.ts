import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadlineComponent } from '../headline/headline.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [
        CommonModule,
        HeadlineComponent,
        RouterModule
    ],
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {

}
