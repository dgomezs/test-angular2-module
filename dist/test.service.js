import { Injectable } from "@angular/core";
export var TestService = (function () {
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
        { type: Injectable },
    ];
    /** @nocollapse */
    TestService.ctorParameters = function () { return []; };
    return TestService;
}());
//# sourceMappingURL=/home/dgomezs/workspace/project-eutychia/test-angular-2-module/test.service.js.map