package com.ana.test.ws.rest.provided.converter;

import com.ana.test.bean.Chambre;
import com.ana.test.service.util.NumberUtil;
import com.ana.test.service.util.StringUtil;
import com.ana.test.service.util.DateUtil;
import com.ana.test.ws.rest.provided.vo.ChambreVo;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;

@Component
public class ChambreConverter extends AbstractConverter<Chambre, ChambreVo> {

    @Autowired
    private CategorieConverter categorieConverter;

    private Boolean categorie;

    public ChambreConverter() {
        init(true);
    }
    @Override
    public Chambre toItem(ChambreVo vo) {
        if (vo == null) {
            return null;
        } else {
            Chambre item = new Chambre();
            if (StringUtil.isNotEmpty(vo.getId()))
                item.setId(NumberUtil.toLong(vo.getId()));

            if (StringUtil.isNotEmpty(vo.getTelephone()))
                item.setTelephone(vo.getTelephone());

            if (StringUtil.isNotEmpty(vo.getAddress()))
                item.setAddress(vo.getAddress());

            if (StringUtil.isNotEmpty(vo.getNbrLit()))
                item.setNbrLit(NumberUtil.toInt(vo.getNbrLit()));

            if (vo.getAvailable() != null)
                item.setAvailable(vo.getAvailable());

            if (StringUtil.isNotEmpty(vo.getAddedAt()))
                item.setAddedAt(DateUtil.parseDateFr(vo.getAddedAt()));

            if (StringUtil.isNotEmpty(vo.getCreatedAt()))
                item.setCreatedAt(DateUtil.parseDateFr(vo.getCreatedAt()));

            if (vo.getCategorieVo() != null && this.categorie) {
                item.setCategorie(categorieConverter.toItem(vo.getCategorieVo()));
             }
            return item;
        }
    }

    @Override
    public ChambreVo toVo(Chambre item) {
        if (item == null) {
            return null;
        } else {
            ChambreVo vo = new ChambreVo();
            if (item.getId() != null)
                vo.setId(NumberUtil.toString(item.getId()));

            if (StringUtil.isNotEmpty(item.getTelephone()))
                vo.setTelephone(item.getTelephone());

            if (StringUtil.isNotEmpty(item.getAddress()))
                vo.setAddress(item.getAddress());

            if (StringUtil.isNotEmpty(item.getNbrLit()))
                vo.setNbrLit(NumberUtil.toString(item.getNbrLit()));

            if (item.getAvailable() != null)
                vo.setAvailable(item.getAvailable());

            if (StringUtil.isNotEmpty(item.getAddedAt()))
                vo.setAddedAt(DateUtil.formateDate(item.getAddedAt()));

            if (StringUtil.isNotEmpty(item.getCreatedAt()))
                vo.setCreatedAt(DateUtil.formateDate(item.getCreatedAt()));

            if (item.getCategorie() != null && this.categorie) {
                vo.setCategorieVo(categorieConverter.toVo(item.getCategorie()));
            }
            return vo;
        }
    }


    public void init(Boolean value) {
        
    }

    public CategorieConverter getCategorieConverter() {
        return this.categorieConverter;
    }

    public void setCategorieConverter(CategorieConverter categorieConverter) {
        this.categorieConverter = categorieConverter;
    }

    public boolean isCategorie() {
        return this.categorie;
    }

    public void setCategorie(boolean categorie) {
        this.categorie = categorie;
    }
    


}