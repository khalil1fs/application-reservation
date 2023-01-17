package com.ana.test.service.user.facade;

import com.ana.test.bean.Chambre;
import com.ana.test.service.core.facade.AbstractService;
import com.ana.test.ws.rest.provided.vo.ChambreVo;

import java.util.List;

public interface ChambreService extends AbstractService<Chambre, Long> {

   List<Chambre> findByCriteria(ChambreVo chambreVo);

}
