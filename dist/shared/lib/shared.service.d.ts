import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class SharedService {
    sub$: BehaviorSubject<string>;
    constructor();
    getStoredValue(): string;
    setStoredValue(parValue: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SharedService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SharedService>;
}
