import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroImageComponent } from '../../presentation/hero-image/hero-image.component';
import { HeroSpeechComponent } from '../../presentation/hero-speech/hero-speech.component';

@Component({
    selector: 'app-headline',
    standalone: true,
    imports: [CommonModule,
        HeroImageComponent,
        HeroSpeechComponent
    ],
    templateUrl: './headline.component.html',
    styleUrls: ['./headline.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadlineComponent {

}
