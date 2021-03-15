package it.iad.CRUD2gruppo3.serviceimpl;

import it.iad.CRUD2gruppo3.model.Prodotto;
import it.iad.CRUD2gruppo3.repository.ProdottoRepository;
import it.iad.CRUD2gruppo3.service.ProdottoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

@Service
public class ProdottoServiceImpl implements ProdottoService {
    
    @Autowired
    ProdottoRepository prodottoRepository;

    @Override
    public List<Prodotto> ricerca(String s) {
        return prodottoRepository.findbyCodiceContainsOrDescrizioneContains(s, s);
    }

    @Override
    public List<Prodotto> rimuovi(Prodotto prodotto) {
        prodottoRepository.delete(prodotto);
        return seleziona();
    }

    @Override
//    @Modifying
//    @Query("update from Prodotto p set p.codice = ?1 set p.descrizione = ?2 where u.id = ?3")
    public List<Prodotto> modifica(Prodotto prodotto) {
//        Prodotto prodDaDb = prodottoRepository.getOne(prodotto.getId());
//        prodDaDb.setDescrizione(prodotto.getDescrizione());
//        prodDaDb.setDescrizione(prodotto.getCodice());
//        prodottoRepository.save(prodDaDb);
        return prodottoRepository.setFixedCodiceForAndDescrizioneFor(prodotto.getCodice(), prodotto.getDescrizione(), prodotto.getId());
    }

    @Override
    public List<Prodotto> seleziona() {
        return prodottoRepository.findAll();
    }

    @Override
    public List<Prodotto> add(Prodotto prodotto) {
        prodottoRepository.save(prodotto);
        return seleziona();
    }
}
