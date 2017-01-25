import {TestService} from "./test.service";
import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [TestService]
})
export class TestAngular2Module {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: TestAngular2Module,
            providers: [TestService]
        };
    }
}




