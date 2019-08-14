import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var JatSCRUDAppTestService = /** @class */ (function () {
    function JatSCRUDAppTestService() {
    }
    JatSCRUDAppTestService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    JatSCRUDAppTestService.ctorParameters = function () { return []; };
    /** @nocollapse */ JatSCRUDAppTestService.ngInjectableDef = ɵɵdefineInjectable({ factory: function JatSCRUDAppTestService_Factory() { return new JatSCRUDAppTestService(); }, token: JatSCRUDAppTestService, providedIn: "root" });
    return JatSCRUDAppTestService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var JatSCRUDAppTestComponent = /** @class */ (function () {
    function JatSCRUDAppTestComponent() {
    }
    /**
     * @return {?}
     */
    JatSCRUDAppTestComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    JatSCRUDAppTestComponent.decorators = [
        { type: Component, args: [{
                    selector: 'JatS-JatSCRUDAppTest',
                    template: "<p>\n  jat-scrudapp-test works!\n</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    JatSCRUDAppTestComponent.ctorParameters = function () { return []; };
    return JatSCRUDAppTestComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var JatSCRUDAppTestModule = /** @class */ (function () {
    function JatSCRUDAppTestModule() {
    }
    JatSCRUDAppTestModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [JatSCRUDAppTestComponent],
                    imports: []
                },] }
    ];
    return JatSCRUDAppTestModule;
}());

export { JatSCRUDAppTestComponent, JatSCRUDAppTestModule, JatSCRUDAppTestService };
//# sourceMappingURL=jat-scrudapp-test.js.map
