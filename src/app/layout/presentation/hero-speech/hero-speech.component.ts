import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-speech',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-speech.component.html',
  styleUrls: ['./hero-speech.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSpeechComponent {

}
