import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-hero-speech',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './hero-speech.component.html',
    styleUrls: ['./hero-speech.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSpeechComponent implements OnInit {

    @Input() main!: string;
    @Input() instruction!: string;

    ngOnInit(): void {
        if (!this.main || !this.instruction) {
            throw new Error("missing mandatory inputs in hero speech component");
        }
    }
}
