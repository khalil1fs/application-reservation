package com.ana.test.service.user.impl;

import com.ana.test.bean.Client;
import com.ana.test.service.user.facade.ClientService;
import com.ana.test.dao.ClientDao;
import com.ana.test.ws.rest.provided.vo.ClientVo;
import com.ana.test.service.util.SearchUtil;
import javax.persistence.EntityManager;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class ClientServiceImpl implements ClientService {


    @Autowired
    private ClientDao clientDao;

    @Autowired
    private EntityManager entityManager;

     @Override
        public Client findByCin(String reference) {
       return clientDao.findByCin(reference);
       }

    @Override
    @Transactional
     public int deleteByCin(String reference) {
       clientDao.deleteByCin(reference);
       return 1; 
       }

      @Override
    public List<Client> findAll() {
        return clientDao.findAll();
    }


    @Override
    public Page<Client> paginate(int page, int size) {
        return clientDao.findAll(PageRequest.of(page, size));
    }

    @Override
    public Client findById(Long id) {
        return clientDao.findById(id).orElse(null);
    }

    @Override
    public Client findByIdWithAssociatedList(Long id) {
        return null;
    }

    @Override
    @Transactional
    public int deleteById(Long id) {
        clientDao.deleteById(id);
         return 1;
    }

    @Override
    public List<List<Client>> getToBeSavedAndToBeDeleted(List<Client> oldList, List<Client> newList) {
        return null;
    }

    @Override
    public Client save(Client entity) {
        return clientDao.save(entity);
    }

    @Override
    public List<Client> save(List<Client> list) {
        return null;
    }

    @Override
    public Client update(Client entity) {
        return clientDao.save(entity);
    }

    @Override
    @Transactional
    public int delete(Client entity) {
        return 0;
    }
    
    @Override
    @Transactional
    public void delete(List<Client> list) {

    }

    @Override
    public void update(List<Client> list) {

           }

    @Override
    public List<Client> findByCriteria(ClientVo entity) {

        String query = "SELECT o FROM Client o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", entity.getId());
        query += SearchUtil.addConstraint("o", "name", "LIKE", entity.getName());
        query += SearchUtil.addConstraint("o", "lastName", "LIKE", entity.getLastName());
        query += SearchUtil.addConstraint("o", "cin", "LIKE", entity.getCin());
        query += SearchUtil.addConstraint("o", "phone", "LIKE", entity.getPhone());
        query += SearchUtil.addConstraint("o", "valid", "=", entity.getValid());
        query += SearchUtil.addConstraint("o", "age", "=", entity.getAge());
		query += SearchUtil.addConstraintDate("o", "birthDate", "=", entity.getBirthDate());
		query += SearchUtil.addConstraintMinMaxDate("o", "birthDate", entity.getBirthDateMin(), entity.getBirthDateMax());
		query += SearchUtil.addConstraintDate("o", "createdAt", "=", entity.getCreatedAt());
		query += SearchUtil.addConstraintMinMaxDate("o", "createdAt", entity.getCreatedAtMin(), entity.getCreatedAtMax());

        return entityManager.createQuery(query).getResultList();
    }

}
