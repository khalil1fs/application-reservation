package com.ana.test.ws.rest.provided.facade.user;

import com.ana.test.service.user.facade.CategorieService;
import java.util.List;

import com.ana.test.ws.rest.provided.dto.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.ana.test.bean.Categorie;
import com.ana.test.ws.rest.provided.converter.CategorieConverter;
import com.ana.test.ws.rest.provided.vo.CategorieVo;


@Api("Manages Categorie services")
@RestController
@RequestMapping("categorie")
public class CategorieRest {

    @Autowired
    private CategorieService categorieService;

    @Autowired
    private CategorieConverter categorieConverter;



       @ApiOperation("Finds a list of all Categories")
       @GetMapping("/")
       public List<CategorieVo> findAll(){
           return categorieConverter.toVo(categorieService.findAll());
       }


       @ApiOperation("Finds a list of all Categories with pagination")
       @GetMapping("/paginate/")
       public Page<CategorieVo> paginate(@RequestParam int page, @RequestParam int size) {
          org.springframework.data.domain.Page<Categorie> paginate = categorieService.paginate(page, size);
          return new Page<>(size, page, paginate.getTotalElements(), categorieConverter.toVo(paginate.getContent()));
        }


       @ApiOperation("Saves the specified Categorie")
       @PostMapping("/")
       public CategorieVo save(@RequestBody  CategorieVo  entityVo){
        Categorie entity = categorieConverter.toItem(entityVo);
           entity = categorieService.save(entity);
        return categorieConverter.toVo(entity);
       }


       @ApiOperation("Updates the specified  Categorie")
       @PutMapping("/")
       public CategorieVo update(@RequestBody  CategorieVo  entityVo){
        Categorie entity = categorieConverter.toItem(entityVo);
           entity = categorieService.update(entity);
        return categorieConverter.toVo(entity);
       }


       @ApiOperation("delete the specified Categorie By Id")
       @DeleteMapping("/{id}/")
       public int delete(@PathVariable Long id){
           return categorieService.deleteById(id);
       }

       @ApiOperation("find the specified Categorie By Id")
       @GetMapping("/{id}/")
       public CategorieVo findById(@PathVariable Long id){
           return categorieConverter.toVo( categorieService.findById(id));
       }

       @ApiOperation("find the specified Categorie By Reference")
       @GetMapping("/reference/{reference}/")
        public CategorieVo findByReference(String reference) {
        return categorieConverter.toVo( categorieService.findByReference(reference));
       }




}