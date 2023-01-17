package com.ana.test.ws.rest.provided.converter;

import com.ana.test.bean.Client;
import com.ana.test.service.util.NumberUtil;
import com.ana.test.service.util.StringUtil;
import com.ana.test.service.util.DateUtil;
import com.ana.test.ws.rest.provided.vo.ClientVo;
import org.springframework.stereotype.Component;

@Component
public class ClientConverter extends AbstractConverter<Client, ClientVo> {

    public ClientConverter() {
        init(true);
    }
    @Override
    public Client toItem(ClientVo vo) {
        if (vo == null) {
            return null;
        } else {
            Client item = new Client();
            if (StringUtil.isNotEmpty(vo.getId()))
                item.setId(NumberUtil.toLong(vo.getId()));

            if (StringUtil.isNotEmpty(vo.getName()))
                item.setName(vo.getName());

            if (StringUtil.isNotEmpty(vo.getLastName()))
                item.setLastName(vo.getLastName());

            if (StringUtil.isNotEmpty(vo.getCin()))
                item.setCin(vo.getCin());

            if (StringUtil.isNotEmpty(vo.getPhone()))
                item.setPhone(vo.getPhone());

            if (StringUtil.isNotEmpty(vo.getAge()))
                item.setAge(NumberUtil.toDouble(vo.getAge()));

            if (vo.getValid() != null)
                item.setValid(vo.getValid());

            if (StringUtil.isNotEmpty(vo.getBirthDate()))
                item.setBirthDate(DateUtil.parseDateFr(vo.getBirthDate()));

            if (StringUtil.isNotEmpty(vo.getCreatedAt()))
                item.setCreatedAt(DateUtil.parseDateFr(vo.getCreatedAt()));
            return item;
        }
    }

    @Override
    public ClientVo toVo(Client item) {
        if (item == null) {
            return null;
        } else {
            ClientVo vo = new ClientVo();
            if (item.getId() != null)
                vo.setId(NumberUtil.toString(item.getId()));

            if (StringUtil.isNotEmpty(item.getName()))
                vo.setName(item.getName());

            if (StringUtil.isNotEmpty(item.getLastName()))
                vo.setLastName(item.getLastName());

            if (StringUtil.isNotEmpty(item.getCin()))
                vo.setCin(item.getCin());

            if (StringUtil.isNotEmpty(item.getPhone()))
                vo.setPhone(item.getPhone());

            if (StringUtil.isNotEmpty(item.getAge()))
                vo.setAge(NumberUtil.toString(item.getAge()));

            if (item.getValid() != null)
                vo.setValid(item.getValid());

            if (StringUtil.isNotEmpty(item.getBirthDate()))
                vo.setBirthDate(DateUtil.formateDate(item.getBirthDate()));

            if (StringUtil.isNotEmpty(item.getCreatedAt()))
                vo.setCreatedAt(DateUtil.formateDate(item.getCreatedAt()));
            return vo;
        }
    }


    public void init(Boolean value) {
        
    }


}