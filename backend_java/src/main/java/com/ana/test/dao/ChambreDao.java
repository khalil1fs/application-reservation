package com.ana.test.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ana.test.bean.Chambre;


@Repository
public interface ChambreDao extends JpaRepository<Chambre,Long> {



}