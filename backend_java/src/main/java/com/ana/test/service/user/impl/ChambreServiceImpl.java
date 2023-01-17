package com.ana.test.service.user.impl;

import com.ana.test.bean.Chambre;
import com.ana.test.service.user.facade.ChambreService;
import com.ana.test.dao.ChambreDao;
import com.ana.test.ws.rest.provided.vo.ChambreVo;
import com.ana.test.service.util.SearchUtil;
import javax.persistence.EntityManager;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class ChambreServiceImpl implements ChambreService {


    @Autowired
    private ChambreDao chambreDao;

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Chambre> findAll() {
        return chambreDao.findAll();
    }


    @Override
    public Page<Chambre> paginate(int page, int size) {
        return chambreDao.findAll(PageRequest.of(page, size));
    }

    @Override
    public Chambre findById(Long id) {
        return chambreDao.findById(id).orElse(null);
    }

    @Override
    public Chambre findByIdWithAssociatedList(Long id) {
        return null;
    }

    @Override
    @Transactional
    public int deleteById(Long id) {
        chambreDao.deleteById(id);
         return 1;
    }

    @Override
    public List<List<Chambre>> getToBeSavedAndToBeDeleted(List<Chambre> oldList, List<Chambre> newList) {
        return null;
    }

    @Override
    public Chambre save(Chambre entity) {
        return chambreDao.save(entity);
    }

    @Override
    public List<Chambre> save(List<Chambre> list) {
        return null;
    }

    @Override
    public Chambre update(Chambre entity) {
        return chambreDao.save(entity);
    }

    @Override
    @Transactional
    public int delete(Chambre entity) {
        return 0;
    }
    
    @Override
    @Transactional
    public void delete(List<Chambre> list) {

    }

    @Override
    public void update(List<Chambre> list) {

           }

    @Override
    public List<Chambre> findByCriteria(ChambreVo entity) {

        String query = "SELECT o FROM Chambre o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", entity.getId());
        query += SearchUtil.addConstraint("o", "telephone", "LIKE", entity.getTelephone());
        query += SearchUtil.addConstraint("o", "address", "LIKE", entity.getAddress());
        query += SearchUtil.addConstraint("o", "available", "=", entity.getAvailable());
        query += SearchUtil.addConstraint("o", "nbrLit", "=", entity.getNbrLit());
		query += SearchUtil.addConstraintDate("o", "addedAt", "=", entity.getAddedAt());
		query += SearchUtil.addConstraintMinMaxDate("o", "addedAt", entity.getAddedAtMin(), entity.getAddedAtMax());
		query += SearchUtil.addConstraintDate("o", "createdAt", "=", entity.getCreatedAt());
		query += SearchUtil.addConstraintMinMaxDate("o", "createdAt", entity.getCreatedAtMin(), entity.getCreatedAtMax());

        return entityManager.createQuery(query).getResultList();
    }

}
