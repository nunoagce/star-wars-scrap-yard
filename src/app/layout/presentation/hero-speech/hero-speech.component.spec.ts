import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSpeechComponent } from './hero-speech.component';

describe('HeroSpeechComponent', () => {
    let component: HeroSpeechComponent;
    let fixture: ComponentFixture<HeroSpeechComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HeroSpeechComponent]
        });
        fixture = TestBed.createComponent(HeroSpeechComponent);
        component = fixture.componentInstance;
        component.main = 'main';
        component.instruction = 'instruction';
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
