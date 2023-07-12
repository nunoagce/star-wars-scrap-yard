import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleListElementComponent } from './vehicle-list-element.component';
import { Vehicle } from '../../helpers/vehicle';
import { By } from '@angular/platform-browser';

describe('VehicleListElementComponent', () => {
    let component: VehicleListElementComponent;
    let fixture: ComponentFixture<VehicleListElementComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [VehicleListElementComponent]
        });
        fixture = TestBed.createComponent(VehicleListElementComponent);
        component = fixture.componentInstance;
        component.vehicle = { name: 'millennium falcon', url: 'http://swapi.dev/api/vehicles/4/' } as Vehicle
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render existing image', () => {
        expect(component.imageSrc).toBe('/assets/vehicles/4.jpg');
    });

    describe('when card is clicked', () => {
        it('should emit onSelect', () => {
            spyOn(component.onSelect, 'emit');
            fixture.debugElement.query(By.css('.card')).nativeElement.click();
            fixture.detectChanges();
            expect(component.onSelect.emit).toHaveBeenCalled();
        })
    })
});
