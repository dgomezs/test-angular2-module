import {Injectable} from "@angular/core";


@Injectable()
export class TestService {

    private counter = 16;

    public increase() {
        this.counter++;
    }

    public decrease() {
        this.counter--;
    }

    public getCounter() {
        return this.counter;
    }


}
