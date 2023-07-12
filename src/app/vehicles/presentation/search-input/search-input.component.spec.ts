import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputComponent } from './search-input.component';
import { FormControl } from '@angular/forms';

describe('SearchInputComponent', () => {
    let component: SearchInputComponent;
    let fixture: ComponentFixture<SearchInputComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SearchInputComponent]
        });
        fixture = TestBed.createComponent(SearchInputComponent);
        component = fixture.componentInstance;
        component.control = new FormControl<string>('', { nonNullable: true })
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
