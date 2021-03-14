import { CrudState } from "./crud-state";

export class RicercaState extends CrudState {
    public add(): CrudState {
        return new AggiungiState();
    }

    public seleziona(): CrudState {
        return new VisualizzaState();
    }

    public ricerca(): CrudState {
        return new RicercaState();
    }
}

export class ModificaState extends CrudState {
    public annulla(): CrudState {
        return new VisualizzaState();
    }

    public conferma(): CrudState {
        return new VisualizzaState();
    }
}

export class RimuoviState extends CrudState {
    public annulla(): CrudState {
        return new VisualizzaState();
    }

    public conferma(): CrudState {
        return new RicercaState();
    }
}

export class AggiungiState extends CrudState {
    public annulla(): CrudState {
        return new RicercaState();
    }

    public conferma(): CrudState {
        return new VisualizzaState();
    }
}

export class VisualizzaState extends CrudState {
    public add(): CrudState {
        return new AggiungiState();
    }

    public modifica(): CrudState {
        return new ModificaState();
    }

    public seleziona(): CrudState {
        return new VisualizzaState();
    }

    public ricerca(): CrudState {
        return new RicercaState();
    }

    public rimuovi(): CrudState {
        return new RimuoviState();
    }
}