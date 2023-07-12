import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vehicle } from '../../helpers/vehicle';

@Component({
    selector: 'app-vehicle-details',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './vehicle-details.component.html',
    styleUrls: ['./vehicle-details.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleDetailsComponent implements OnInit {

    @Input() vehicle!: Vehicle;

    imageSrc!: string;

    ngOnInit(): void {
        if (!this.vehicle) {
            throw new Error('missing vehicle input');
        }
        let split = this.vehicle.url.split('/');
        this.imageSrc = `./assets/vehicles/${split[split.length - 2]}.jpg`
    }

    onImageError() {
        this.imageSrc = './assets/placeholder.jpg';
    }

}
