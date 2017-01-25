"use strict";
var test_service_1 = require("./test.service");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var TestAngular2Module = (function () {
    function TestAngular2Module() {
    }
    TestAngular2Module.forRoot = function () {
        return {
            ngModule: TestAngular2Module,
            providers: [test_service_1.TestService]
        };
    };
    TestAngular2Module.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule
                    ],
                    declarations: [],
                    providers: [test_service_1.TestService]
                },] },
    ];
    /** @nocollapse */
    TestAngular2Module.ctorParameters = function () { return []; };
    return TestAngular2Module;
}());
exports.TestAngular2Module = TestAngular2Module;
//# sourceMappingURL=/tmp/pe/test-angular-2-module/test-angular2.module.js.map