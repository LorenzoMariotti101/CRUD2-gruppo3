package it.iad.CRUD2gruppo3.service;

import it.iad.CRUD2gruppo3.model.Prodotto;
import java.util.List;

public interface ProdottoService {
    List<Prodotto> ricerca(String s);
    List<Prodotto> rimuovi(Prodotto prodotto);
    List<Prodotto> modifica(Prodotto prodotto);
    List<Prodotto> seleziona();
    List<Prodotto> add(Prodotto prodotto);
    
    
}
