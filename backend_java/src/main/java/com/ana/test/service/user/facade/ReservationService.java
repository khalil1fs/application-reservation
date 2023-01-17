package com.ana.test.service.user.facade;

import com.ana.test.bean.Reservation;
import com.ana.test.service.core.facade.AbstractService;
import com.ana.test.ws.rest.provided.vo.ReservationVo;

import java.util.List;

public interface ReservationService extends AbstractService<Reservation, Long> {

   List<Reservation> findByCriteria(ReservationVo reservationVo);
   Reservation findByReference(String reference);
   int deleteByReference(String ref);

}
