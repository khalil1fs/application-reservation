package com.ana.test.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ana.test.bean.Client;


@Repository
public interface ClientDao extends JpaRepository<Client,Long> {

   Client findByCin(String reference);
   void deleteByCin(String ref);


}