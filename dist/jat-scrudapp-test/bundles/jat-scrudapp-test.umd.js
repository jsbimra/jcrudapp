(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jat-scrudapp-test', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['jat-scrudapp-test'] = {}, global.ng.core));
}(this, function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var JatSCRUDAppTestService = /** @class */ (function () {
        function JatSCRUDAppTestService() {
        }
        JatSCRUDAppTestService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        JatSCRUDAppTestService.ctorParameters = function () { return []; };
        /** @nocollapse */ JatSCRUDAppTestService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function JatSCRUDAppTestService_Factory() { return new JatSCRUDAppTestService(); }, token: JatSCRUDAppTestService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        declarations: [JatSCRUDAppTestComponent],
                        imports: []
                    },] }
        ];
        return JatSCRUDAppTestModule;
    }());

    exports.JatSCRUDAppTestComponent = JatSCRUDAppTestComponent;
    exports.JatSCRUDAppTestModule = JatSCRUDAppTestModule;
    exports.JatSCRUDAppTestService = JatSCRUDAppTestService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jat-scrudapp-test.umd.js.map
