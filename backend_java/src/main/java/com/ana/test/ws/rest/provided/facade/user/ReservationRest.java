package com.ana.test.ws.rest.provided.facade.user;

import com.ana.test.service.user.facade.ReservationService;
import java.util.List;

import com.ana.test.ws.rest.provided.dto.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.ana.test.bean.Reservation;
import com.ana.test.ws.rest.provided.converter.ReservationConverter;
import com.ana.test.ws.rest.provided.vo.ReservationVo;


@Api("Manages Reservation services")
@RestController
@RequestMapping("reservation")
public class ReservationRest {

    @Autowired
    private ReservationService reservationService;

    @Autowired
    private ReservationConverter reservationConverter;



       @ApiOperation("Finds a list of all Reservations")
       @GetMapping("/")
       public List<ReservationVo> findAll(){
           return reservationConverter.toVo(reservationService.findAll());
       }


       @ApiOperation("Finds a list of all Reservations with pagination")
       @GetMapping("/paginate/")
       public Page<ReservationVo> paginate(@RequestParam int page, @RequestParam int size) {
          org.springframework.data.domain.Page<Reservation> paginate = reservationService.paginate(page, size);
          return new Page<>(size, page, paginate.getTotalElements(), reservationConverter.toVo(paginate.getContent()));
        }


       @ApiOperation("Saves the specified Reservation")
       @PostMapping("/")
       public ReservationVo save(@RequestBody  ReservationVo  entityVo){
        Reservation entity = reservationConverter.toItem(entityVo);
           entity = reservationService.save(entity);
        return reservationConverter.toVo(entity);
       }


       @ApiOperation("Updates the specified  Reservation")
       @PutMapping("/")
       public ReservationVo update(@RequestBody  ReservationVo  entityVo){
        Reservation entity = reservationConverter.toItem(entityVo);
           entity = reservationService.update(entity);
        return reservationConverter.toVo(entity);
       }


       @ApiOperation("delete the specified Reservation By Id")
       @DeleteMapping("/{id}/")
       public int delete(@PathVariable Long id){
           return reservationService.deleteById(id);
       }

       @ApiOperation("find the specified Reservation By Id")
       @GetMapping("/{id}/")
       public ReservationVo findById(@PathVariable Long id){
           return reservationConverter.toVo( reservationService.findById(id));
       }

       @ApiOperation("Search Reservation by a specific criteria")
       @PostMapping("/search")
       public List<ReservationVo> findByCriteria(@RequestBody ReservationVo entity) {
          return reservationConverter.toVo(reservationService.findByCriteria(entity));
       }


       @ApiOperation("find the specified Reservation By Reference")
       @GetMapping("/reference/{reference}/")
        public ReservationVo findByReference(String reference) {
        return reservationConverter.toVo( reservationService.findByReference(reference));
       }




}