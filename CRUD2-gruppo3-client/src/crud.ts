import { CrudOperations } from "./crud-operations";
import { CrudState } from "./crud-state";
import { RicercaState } from "./stati";

export class Crud implements CrudOperations {
    private _state: CrudState = new RicercaState();

    constructor() {
        this.logCurrentState();
    }

    getState(): CrudState {
        return this._state;
    }

    private logCurrentState(): void {
        console.log(this._state);
    }

    add(): void {
        this._state = this._state.add();
        this.logCurrentState();
    }
    annulla(): void {
        this._state = this._state.annulla();
        this.logCurrentState();
    }
    conferma(): void {
        this._state = this._state.conferma();
        this.logCurrentState();
    }
    modifica(): void {
        this._state = this._state.modifica();
        this.logCurrentState();
    }
    rimuovi(): void {
        this._state = this._state.rimuovi();
        this.logCurrentState();
    }
    ricerca(): void {
        this._state = this._state.ricerca();
        this.logCurrentState();
    }
    seleziona(): void {
        this._state = this._state.seleziona();
        this.logCurrentState();
    }
}