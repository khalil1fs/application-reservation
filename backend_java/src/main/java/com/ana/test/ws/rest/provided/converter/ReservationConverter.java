package com.ana.test.ws.rest.provided.converter;

import com.ana.test.bean.Reservation;
import com.ana.test.service.util.NumberUtil;
import com.ana.test.service.util.StringUtil;
import com.ana.test.service.util.DateUtil;
import com.ana.test.ws.rest.provided.vo.ReservationVo;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;

@Component
public class ReservationConverter extends AbstractConverter<Reservation, ReservationVo> {

    @Autowired
    private ClientConverter clientConverter;

    private Boolean client;

    @Autowired
    private ChambreConverter chambreConverter;

    private Boolean chambre;

    public ReservationConverter() {
        init(true);
    }
    @Override
    public Reservation toItem(ReservationVo vo) {
        if (vo == null) {
            return null;
        } else {
            Reservation item = new Reservation();
            if (StringUtil.isNotEmpty(vo.getId()))
                item.setId(NumberUtil.toLong(vo.getId()));

            if (StringUtil.isNotEmpty(vo.getReference()))
                item.setReference(vo.getReference());

            if (StringUtil.isNotEmpty(vo.getStatus()))
                item.setStatus(vo.getStatus());

            if (StringUtil.isNotEmpty(vo.getDayNumber()))
                item.setDayNumber(NumberUtil.toInt(vo.getDayNumber()));

            if (vo.getValid() != null)
                item.setValid(vo.getValid());

            if (StringUtil.isNotEmpty(vo.getDateDebut()))
                item.setDateDebut(DateUtil.parseDateFr(vo.getDateDebut()));

            if (StringUtil.isNotEmpty(vo.getDateFin()))
                item.setDateFin(DateUtil.parseDateFr(vo.getDateFin()));

            if (vo.getClientVo() != null && this.client) {
                item.setClient(clientConverter.toItem(vo.getClientVo()));
             }

            if (vo.getChambreVo() != null && this.chambre) {
                item.setChambre(chambreConverter.toItem(vo.getChambreVo()));
             }
            return item;
        }
    }

    @Override
    public ReservationVo toVo(Reservation item) {
        if (item == null) {
            return null;
        } else {
            ReservationVo vo = new ReservationVo();
            if (item.getId() != null)
                vo.setId(NumberUtil.toString(item.getId()));

            if (StringUtil.isNotEmpty(item.getReference()))
                vo.setReference(item.getReference());

            if (StringUtil.isNotEmpty(item.getStatus()))
                vo.setStatus(item.getStatus());

            if (StringUtil.isNotEmpty(item.getDayNumber()))
                vo.setDayNumber(NumberUtil.toString(item.getDayNumber()));

            if (item.getValid() != null)
                vo.setValid(item.getValid());

            if (StringUtil.isNotEmpty(item.getDateDebut()))
                vo.setDateDebut(DateUtil.formateDate(item.getDateDebut()));

            if (StringUtil.isNotEmpty(item.getDateFin()))
                vo.setDateFin(DateUtil.formateDate(item.getDateFin()));

            if (item.getClient() != null && this.client) {
                vo.setClientVo(clientConverter.toVo(item.getClient()));
            }

            if (item.getChambre() != null && this.chambre) {
                vo.setChambreVo(chambreConverter.toVo(item.getChambre()));
            }
            return vo;
        }
    }


    public void init(Boolean value) {
        
    }

    public ClientConverter getClientConverter() {
        return this.clientConverter;
    }

    public void setClientConverter(ClientConverter clientConverter) {
        this.clientConverter = clientConverter;
    }

    public boolean isClient() {
        return this.client;
    }

    public void setClient(boolean client) {
        this.client = client;
    }
    

    public ChambreConverter getChambreConverter() {
        return this.chambreConverter;
    }

    public void setChambreConverter(ChambreConverter chambreConverter) {
        this.chambreConverter = chambreConverter;
    }

    public boolean isChambre() {
        return this.chambre;
    }

    public void setChambre(boolean chambre) {
        this.chambre = chambre;
    }
    


}