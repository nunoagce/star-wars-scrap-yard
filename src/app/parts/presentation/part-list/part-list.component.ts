import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-part-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './part-list.component.html',
  styleUrls: ['./part-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartListComponent {

}
