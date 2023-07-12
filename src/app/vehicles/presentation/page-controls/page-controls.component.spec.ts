import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageControlsComponent } from './page-controls.component';

describe('PageControlsComponent', () => {
    let component: PageControlsComponent;
    let fixture: ComponentFixture<PageControlsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [PageControlsComponent]
        });
        fixture = TestBed.createComponent(PageControlsComponent);
        component = fixture.componentInstance;
        component.canClickNext = true;
        component.canClickPrevious = true;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
