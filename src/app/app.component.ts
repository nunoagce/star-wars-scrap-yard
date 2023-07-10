import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadlineComponent } from './layout/feature/headline/headline.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        RouterOutlet,
        HeadlineComponent
    ]
})
export class AppComponent {
    title = 'star-wars-scrap-yard';
}
