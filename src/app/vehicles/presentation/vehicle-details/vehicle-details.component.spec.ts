import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDetailsComponent } from './vehicle-details.component';
import { Vehicle } from '../../helpers/vehicle';

describe('VehicleDetailsComponent', () => {
    let component: VehicleDetailsComponent;
    let fixture: ComponentFixture<VehicleDetailsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [VehicleDetailsComponent]
        });
        fixture = TestBed.createComponent(VehicleDetailsComponent);
        component = fixture.componentInstance;
        component.vehicle = { name: 'millennium falcon', url: 'http://swapi.dev/api/vehicles/4/' } as Vehicle
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
