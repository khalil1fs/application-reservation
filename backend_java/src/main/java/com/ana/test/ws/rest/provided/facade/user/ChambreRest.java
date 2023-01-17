package com.ana.test.ws.rest.provided.facade.user;

import com.ana.test.service.user.facade.ChambreService;
import java.util.List;

import com.ana.test.ws.rest.provided.dto.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.ana.test.bean.Chambre;
import com.ana.test.ws.rest.provided.converter.ChambreConverter;
import com.ana.test.ws.rest.provided.vo.ChambreVo;


@Api("Manages Chambre services")
@RestController
@RequestMapping("chambre")
public class ChambreRest {

    @Autowired
    private ChambreService chambreService;

    @Autowired
    private ChambreConverter chambreConverter;



       @ApiOperation("Finds a list of all Chambres")
       @GetMapping("/")
       public List<ChambreVo> findAll(){
           return chambreConverter.toVo(chambreService.findAll());
       }


       @ApiOperation("Finds a list of all Chambres with pagination")
       @GetMapping("/paginate/")
       public Page<ChambreVo> paginate(@RequestParam int page, @RequestParam int size) {
          org.springframework.data.domain.Page<Chambre> paginate = chambreService.paginate(page, size);
          return new Page<>(size, page, paginate.getTotalElements(), chambreConverter.toVo(paginate.getContent()));
        }


       @ApiOperation("Saves the specified Chambre")
       @PostMapping("/")
       public ChambreVo save(@RequestBody  ChambreVo  entityVo){
        Chambre entity = chambreConverter.toItem(entityVo);
           entity = chambreService.save(entity);
        return chambreConverter.toVo(entity);
       }


       @ApiOperation("Updates the specified  Chambre")
       @PutMapping("/")
       public ChambreVo update(@RequestBody  ChambreVo  entityVo){
        Chambre entity = chambreConverter.toItem(entityVo);
           entity = chambreService.update(entity);
        return chambreConverter.toVo(entity);
       }


       @ApiOperation("delete the specified Chambre By Id")
       @DeleteMapping("/{id}/")
       public int delete(@PathVariable Long id){
           return chambreService.deleteById(id);
       }

       @ApiOperation("find the specified Chambre By Id")
       @GetMapping("/{id}/")
       public ChambreVo findById(@PathVariable Long id){
           return chambreConverter.toVo( chambreService.findById(id));
       }

       @ApiOperation("Search Chambre by a specific criteria")
       @PostMapping("/search")
       public List<ChambreVo> findByCriteria(@RequestBody ChambreVo entity) {
          return chambreConverter.toVo(chambreService.findByCriteria(entity));
       }




}