package com.ana.test.service.user.facade;

import com.ana.test.bean.Categorie;
import com.ana.test.service.core.facade.AbstractService;

public interface CategorieService extends AbstractService<Categorie, Long> {

   Categorie findByReference(String reference);
   int deleteByReference(String ref);

}
