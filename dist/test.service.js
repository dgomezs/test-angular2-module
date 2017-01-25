"use strict";
var core_1 = require("@angular/core");
var TestService = (function () {
    function TestService() {
        this.counter = 16;
    }
    TestService.prototype.increase = function () {
        this.counter++;
    };
    TestService.prototype.decrease = function () {
        this.counter--;
    };
    TestService.prototype.getCounter = function () {
        return this.counter;
    };
    TestService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    TestService.ctorParameters = function () { return []; };
    return TestService;
}());
exports.TestService = TestService;
//# sourceMappingURL=/tmp/pe/test-angular-2-module/test.service.js.map