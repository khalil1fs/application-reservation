package com.ana.test.service.user.facade;

import com.ana.test.bean.Client;
import com.ana.test.service.core.facade.AbstractService;
import com.ana.test.ws.rest.provided.vo.ClientVo;

import java.util.List;

public interface ClientService extends AbstractService<Client, Long> {

   List<Client> findByCriteria(ClientVo clientVo);
   Client findByCin(String reference);
   int deleteByCin(String ref);

}
