package com.ana.test.service.user.impl;

import com.ana.test.bean.Reservation;
import com.ana.test.service.user.facade.ReservationService;
import com.ana.test.dao.ReservationDao;
import com.ana.test.ws.rest.provided.vo.ReservationVo;
import com.ana.test.service.util.SearchUtil;
import javax.persistence.EntityManager;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class ReservationServiceImpl implements ReservationService {


    @Autowired
    private ReservationDao reservationDao;

    @Autowired
    private EntityManager entityManager;

     @Override
        public Reservation findByReference(String reference) {
       return reservationDao.findByReference(reference);
       }

    @Override
    @Transactional
     public int deleteByReference(String reference) {
       reservationDao.deleteByReference(reference);
       return 1; 
       }

      @Override
    public List<Reservation> findAll() {
        return reservationDao.findAll();
    }


    @Override
    public Page<Reservation> paginate(int page, int size) {
        return reservationDao.findAll(PageRequest.of(page, size));
    }

    @Override
    public Reservation findById(Long id) {
        return reservationDao.findById(id).orElse(null);
    }

    @Override
    public Reservation findByIdWithAssociatedList(Long id) {
        return null;
    }

    @Override
    @Transactional
    public int deleteById(Long id) {
        reservationDao.deleteById(id);
         return 1;
    }

    @Override
    public List<List<Reservation>> getToBeSavedAndToBeDeleted(List<Reservation> oldList, List<Reservation> newList) {
        return null;
    }

    @Override
    public Reservation save(Reservation entity) {
        return reservationDao.save(entity);
    }

    @Override
    public List<Reservation> save(List<Reservation> list) {
        return null;
    }

    @Override
    public Reservation update(Reservation entity) {
        return reservationDao.save(entity);
    }

    @Override
    @Transactional
    public int delete(Reservation entity) {
        return 0;
    }
    
    @Override
    @Transactional
    public void delete(List<Reservation> list) {

    }

    @Override
    public void update(List<Reservation> list) {

           }

    @Override
    public List<Reservation> findByCriteria(ReservationVo entity) {

        String query = "SELECT o FROM Reservation o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", entity.getId());
        query += SearchUtil.addConstraint("o", "reference", "LIKE", entity.getReference());
        query += SearchUtil.addConstraint("o", "status", "LIKE", entity.getStatus());
        query += SearchUtil.addConstraint("o", "valid", "=", entity.getValid());
        query += SearchUtil.addConstraint("o", "dayNumber", "=", entity.getDayNumber());
		query += SearchUtil.addConstraintDate("o", "dateDebut", "=", entity.getDateDebut());
		query += SearchUtil.addConstraintMinMaxDate("o", "dateDebut", entity.getDateDebutMin(), entity.getDateDebutMax());
		query += SearchUtil.addConstraintDate("o", "dateFin", "=", entity.getDateFin());
		query += SearchUtil.addConstraintMinMaxDate("o", "dateFin", entity.getDateFinMin(), entity.getDateFinMax());

        return entityManager.createQuery(query).getResultList();
    }

}
