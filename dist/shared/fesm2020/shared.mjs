import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

class SharedService {
    constructor() {
        this.sub$ = new BehaviorSubject('');
    }
    getStoredValue() {
        return this.sub$.getValue();
    }
    setStoredValue(parValue) {
        this.sub$.next(parValue);
    }
}
SharedService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: SharedService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SharedService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: SharedService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: SharedService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class SharedComponent {
    constructor() { }
    ngOnInit() {
    }
}
SharedComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: SharedComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SharedComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.2", type: SharedComponent, selector: "lib-shared", ngImport: i0, template: `
    <p>
      shared works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: SharedComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-shared',
                    template: `
    <p>
      shared works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class SharedModule {
}
SharedModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: SharedModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SharedModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: SharedModule, declarations: [SharedComponent], exports: [SharedComponent] });
SharedModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: SharedModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: SharedModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SharedComponent
                    ],
                    imports: [],
                    exports: [
                        SharedComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of shared
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SharedComponent, SharedModule, SharedService };
//# sourceMappingURL=shared.mjs.map
