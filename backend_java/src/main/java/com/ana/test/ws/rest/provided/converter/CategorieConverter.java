package com.ana.test.ws.rest.provided.converter;

import com.ana.test.bean.Categorie;
import com.ana.test.service.util.NumberUtil;
import com.ana.test.service.util.StringUtil;
import com.ana.test.service.util.DateUtil;
import com.ana.test.ws.rest.provided.vo.CategorieVo;
import org.springframework.stereotype.Component;

@Component
public class CategorieConverter extends AbstractConverter<Categorie, CategorieVo> {

    public CategorieConverter() {
        init(true);
    }
    @Override
    public Categorie toItem(CategorieVo vo) {
        if (vo == null) {
            return null;
        } else {
            Categorie item = new Categorie();
            if (StringUtil.isNotEmpty(vo.getId()))
                item.setId(NumberUtil.toLong(vo.getId()));

            if (StringUtil.isNotEmpty(vo.getReference()))
                item.setReference(vo.getReference());

            if (StringUtil.isNotEmpty(vo.getCreatedAt()))
                item.setCreatedAt(DateUtil.parseDateFr(vo.getCreatedAt()));
            return item;
        }
    }

    @Override
    public CategorieVo toVo(Categorie item) {
        if (item == null) {
            return null;
        } else {
            CategorieVo vo = new CategorieVo();
            if (item.getId() != null)
                vo.setId(NumberUtil.toString(item.getId()));

            if (StringUtil.isNotEmpty(item.getReference()))
                vo.setReference(item.getReference());

            if (StringUtil.isNotEmpty(item.getCreatedAt()))
                vo.setCreatedAt(DateUtil.formateDate(item.getCreatedAt()));
            return vo;
        }
    }


    public void init(Boolean value) {
        
    }


}