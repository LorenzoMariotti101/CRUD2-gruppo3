package it.iad.CRUD2gruppo3.repository;

import it.iad.CRUD2gruppo3.model.Prodotto;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdottoRepository extends JpaRepository<Prodotto, Long> {

    List<Prodotto> findbyCodiceContainsOrDescrizioneContains(String c, String a);
    @Modifying
    @Query("update from Prodotto p set p.codice = ?1 set p.descrizione = ?2 where u.id = ?3")
    List<Prodotto> setFixedCodiceForAndDescrizioneFor(String codice, String descrizione, Long Id);
}
