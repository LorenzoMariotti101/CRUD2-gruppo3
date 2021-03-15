package it.iad.CRUD2gruppo3.dto;

import it.iad.CRUD2gruppo3.model.Prodotto;
import java.util.List;


public class DtoListaProdotti {
    
    List<Prodotto> listaProdotti;

    public DtoListaProdotti() {
    }

    public DtoListaProdotti(List<Prodotto> prodotti) {
        this.listaProdotti = prodotti;
    }

    public List<Prodotto> getProdotti() {
        return listaProdotti;
    }

    public void setProdotti(List<Prodotto> prodotti) {
        this.listaProdotti = prodotti;
    }   
}
