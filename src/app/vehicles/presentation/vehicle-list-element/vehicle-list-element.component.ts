import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vehicle } from '../../helpers/vehicle';

@Component({
    selector: 'app-vehicle-list-element',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './vehicle-list-element.component.html',
    styleUrls: ['./vehicle-list-element.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleListElementComponent implements OnInit {

    @Input() vehicle!: Vehicle;
    @Output() onSelect = new EventEmitter();

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
