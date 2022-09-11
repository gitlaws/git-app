import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App Component', () => {
    it('Exists', () => {
        //assert
        expect(AppComponent).toBeDefined();
    });

    it('Can be built', () => {
        //act
        const component = new AppComponent();

        //assert
        expect(component instanceof AppComponent).toBe(true);
    });

});
