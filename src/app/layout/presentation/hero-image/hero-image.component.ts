import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroImageComponent {

}
