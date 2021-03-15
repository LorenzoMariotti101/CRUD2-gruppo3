package it.iad.CRUD2gruppo3.dto;

import it.iad.CRUD2gruppo3.model.Prodotto;

public class DtoProdotto {
    private Prodotto prodotto;

    public DtoProdotto() {
    }
    
    public DtoProdotto(Prodotto prodotto) {
        this.prodotto = prodotto;
    }    

    public Prodotto getProdotto() {
        return prodotto;
    }

    public void setProdotto(Prodotto prodotto) {
        this.prodotto = prodotto;
    }
    
}
