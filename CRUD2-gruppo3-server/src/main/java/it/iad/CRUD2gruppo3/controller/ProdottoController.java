package it.iad.CRUD2gruppo3.controller;

import it.iad.CRUD2gruppo3.dto.DtoCriterio;
import it.iad.CRUD2gruppo3.dto.DtoListaProdotti;
import it.iad.CRUD2gruppo3.dto.DtoProdotto;
import it.iad.CRUD2gruppo3.service.ProdottoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
public class ProdottoController {
    
    @Autowired
    ProdottoService prodottoService;
    
    @RequestMapping("/ricerca")
    @ResponseBody
    public DtoListaProdotti ricerca(@RequestBody DtoCriterio dto){
        return new DtoListaProdotti(prodottoService.ricerca(dto.getCriterio()));
    }
    
    @RequestMapping("/rimuovi")
    @ResponseBody
    public DtoListaProdotti rimuovi(@RequestBody DtoProdotto dto){
        return new DtoListaProdotti(prodottoService.rimuovi(dto.getProdotto()));
    }
    
    @RequestMapping("/modifica")
    @ResponseBody
    public DtoListaProdotti modifica(@RequestBody DtoProdotto dto){
        return new DtoListaProdotti(prodottoService.modifica(dto.getProdotto()));
    }
    
    @RequestMapping("/seleziona")
    @ResponseBody
    public DtoListaProdotti seleziona(){
        return new DtoListaProdotti(prodottoService.seleziona());
    }
    
    @RequestMapping("/add")
    @ResponseBody
    public DtoListaProdotti add(@RequestBody DtoProdotto dto){
        return new DtoListaProdotti(prodottoService.add(dto.getProdotto()));
    }

}
