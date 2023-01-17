package com.ana.test.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ana.test.bean.Categorie;


@Repository
public interface CategorieDao extends JpaRepository<Categorie,Long> {

   Categorie findByReference(String reference);
   void deleteByReference(String ref);


}