package com.ana.test.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ana.test.bean.Reservation;


@Repository
public interface ReservationDao extends JpaRepository<Reservation,Long> {

   Reservation findByReference(String reference);
   void deleteByReference(String ref);


}