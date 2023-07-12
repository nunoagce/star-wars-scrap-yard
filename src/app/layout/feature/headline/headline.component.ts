import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroImageComponent } from '../../presentation/hero-image/hero-image.component';
import { HeroSpeechComponent } from '../../presentation/hero-speech/hero-speech.component';
import { WattoService } from '../../data-access/watto.service';
import { Observable, map, tap } from 'rxjs';
import { SpeechLabels } from '../../helpers/speech-labels';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';

@Component({
    selector: 'app-headline',
    standalone: true,
    imports: [CommonModule,
        HeroImageComponent,
        HeroSpeechComponent
    ],
    templateUrl: './headline.component.html',
    styleUrls: ['./headline.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('speechAnimation', [
            transition('* => *', [
                query('app-hero-speech', style({ opacity: 0 })),
                query('app-hero-speech', stagger('2000ms', [
                    animate('600ms', style({ opacity: 1 }))
                ]))
            ])
        ])
    ]
})
export class HeadlineComponent {

    constructor(private watto: WattoService) { }

    nrOfEmissions = 0;

    labels$: Observable<SpeechLabels> = this.watto.speech$.pipe(map((speech) => {
        const labels: SpeechLabels = {
            main: '',
            instruction: ''
        };

        if (speech.orderPlaced) {
            labels.main = `Working on your order for ${speech.selectedVehicle}. Come back later to pick it up.`;
            labels.instruction = 'To place another order, click the back button to go back to the list'
            return labels;
        }
        if (speech.selectedVehicle) {
            labels.main = speech.inStock
                ? `Selected vehicle ${speech.selectedVehicle}`
                : `I don't have any parts for ${speech.selectedVehicle} in stock`;
            labels.instruction = speech.inStock
                ? `Select parts for your vehicle`
                : `Select another vehicle`;
            return labels;
        }
        if (speech.searchTerm) {
            labels.main = speech.inStock
                ? `Found these vehicles based on the search term ${speech.searchTerm}`
                : `Could not find any vehicles from the search term ${speech.searchTerm}`;
            labels.instruction = speech.inStock
                ? `Select a vehicle`
                : `Use a different search term`;
            return labels;
        }

        labels.main = 'Welcome to Tattoine\'s finest scrap yard'
        labels.instruction = 'Select a vehicle or search using the search bar'

        return labels;
    }),
        tap(() => this.nrOfEmissions++))
}
