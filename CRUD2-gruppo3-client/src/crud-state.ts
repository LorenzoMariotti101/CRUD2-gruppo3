import { CrudOperations } from "./crud-operations";

export abstract class CrudState implements CrudOperations{
    add(): CrudState {
        throw new Error("Evento inatteso.");
    }
    annulla(): CrudState {
        throw new Error("Evento inatteso.");
    }
    conferma(): CrudState {
        throw new Error("Evento inatteso.");
    }
    modifica(): CrudState {
        throw new Error("Evento inatteso.");
    }
    rimuovi(): CrudState {
        throw new Error("Evento inatteso.");
    }
    ricerca(): CrudState {
        throw new Error("Evento inatteso.");
    }
    seleziona(): CrudState {
        throw new Error("Evento inatteso.");
    }

}