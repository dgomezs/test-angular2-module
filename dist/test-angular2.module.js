import { TestService } from "./test.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
export var TestAngular2Module = (function () {
    function TestAngular2Module() {
    }
    TestAngular2Module.forRoot = function () {
        return {
            ngModule: TestAngular2Module,
            providers: [TestService]
        };
    };
    TestAngular2Module.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [],
                    providers: [TestService]
                },] },
    ];
    /** @nocollapse */
    TestAngular2Module.ctorParameters = function () { return []; };
    return TestAngular2Module;
}());
//# sourceMappingURL=/home/dgomezs/workspace/project-eutychia/test-angular-2-module/test-angular2.module.js.map