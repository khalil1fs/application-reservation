package com.ana.test.service.user.impl;

import com.ana.test.bean.Categorie;
import com.ana.test.service.user.facade.CategorieService;
import com.ana.test.dao.CategorieDao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class CategorieServiceImpl implements CategorieService {


    @Autowired
    private CategorieDao categorieDao;
     @Override
        public Categorie findByReference(String reference) {
       return categorieDao.findByReference(reference);
       }

    @Override
    @Transactional
     public int deleteByReference(String reference) {
       categorieDao.deleteByReference(reference);
       return 1; 
       }

      @Override
    public List<Categorie> findAll() {
        return categorieDao.findAll();
    }


    @Override
    public Page<Categorie> paginate(int page, int size) {
        return categorieDao.findAll(PageRequest.of(page, size));
    }

    @Override
    public Categorie findById(Long id) {
        return categorieDao.findById(id).orElse(null);
    }

    @Override
    public Categorie findByIdWithAssociatedList(Long id) {
        return null;
    }

    @Override
    @Transactional
    public int deleteById(Long id) {
        categorieDao.deleteById(id);
         return 1;
    }

    @Override
    public List<List<Categorie>> getToBeSavedAndToBeDeleted(List<Categorie> oldList, List<Categorie> newList) {
        return null;
    }

    @Override
    public Categorie save(Categorie entity) {
        return categorieDao.save(entity);
    }

    @Override
    public List<Categorie> save(List<Categorie> list) {
        return null;
    }

    @Override
    public Categorie update(Categorie entity) {
        return categorieDao.save(entity);
    }

    @Override
    @Transactional
    public int delete(Categorie entity) {
        return 0;
    }
    
    @Override
    @Transactional
    public void delete(List<Categorie> list) {

    }

    @Override
    public void update(List<Categorie> list) {

           }
}
