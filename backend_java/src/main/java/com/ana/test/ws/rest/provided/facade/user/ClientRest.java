package com.ana.test.ws.rest.provided.facade.user;

import com.ana.test.service.user.facade.ClientService;
import java.util.List;

import com.ana.test.ws.rest.provided.dto.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.ana.test.bean.Client;
import com.ana.test.ws.rest.provided.converter.ClientConverter;
import com.ana.test.ws.rest.provided.vo.ClientVo;


@Api("Manages Client services")
@RestController
@RequestMapping("client")
public class ClientRest {

    @Autowired
    private ClientService clientService;

    @Autowired
    private ClientConverter clientConverter;



       @ApiOperation("Finds a list of all Clients")
       @GetMapping("/")
       public List<ClientVo> findAll(){
           return clientConverter.toVo(clientService.findAll());
       }


       @ApiOperation("Finds a list of all Clients with pagination")
       @GetMapping("/paginate/")
       public Page<ClientVo> paginate(@RequestParam int page, @RequestParam int size) {
          org.springframework.data.domain.Page<Client> paginate = clientService.paginate(page, size);
          return new Page<>(size, page, paginate.getTotalElements(), clientConverter.toVo(paginate.getContent()));
        }


       @ApiOperation("Saves the specified Client")
       @PostMapping("/")
       public ClientVo save(@RequestBody  ClientVo  entityVo){
        Client entity = clientConverter.toItem(entityVo);
           entity = clientService.save(entity);
        return clientConverter.toVo(entity);
       }


       @ApiOperation("Updates the specified  Client")
       @PutMapping("/")
       public ClientVo update(@RequestBody  ClientVo  entityVo){
        Client entity = clientConverter.toItem(entityVo);
           entity = clientService.update(entity);
        return clientConverter.toVo(entity);
       }


       @ApiOperation("delete the specified Client By Id")
       @DeleteMapping("/{id}/")
       public int delete(@PathVariable Long id){
           return clientService.deleteById(id);
       }

       @ApiOperation("find the specified Client By Id")
       @GetMapping("/{id}/")
       public ClientVo findById(@PathVariable Long id){
           return clientConverter.toVo( clientService.findById(id));
       }

       @ApiOperation("Search Client by a specific criteria")
       @PostMapping("/search")
       public List<ClientVo> findByCriteria(@RequestBody ClientVo entity) {
          return clientConverter.toVo(clientService.findByCriteria(entity));
       }


       @ApiOperation("find the specified Client By Cin")
       @GetMapping("/cin/{reference}/")
        public ClientVo findByCin(String reference) {
        return clientConverter.toVo( clientService.findByCin(reference));
       }




}