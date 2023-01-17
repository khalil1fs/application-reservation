package com.ana.test.ws.rest.provided.vo;


public class ChambreVo {

    private String id;
    private CategorieVo categorieVo;

    private String telephone;
    private String address;
    private String addedAt;
    private String addedAtMin;
    private String addedAtMax;
    private String createdAt;
    private String createdAtMin;
    private String createdAtMax;
    private String nbrLit;
    private Boolean available;


    public ChambreVo() {
                   super();
           }



    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }


    public CategorieVo getCategorieVo() {
        return this.categorieVo;
    }

    public void setCategorieVo(CategorieVo categorieVo) {
        this.categorieVo = categorieVo;
    }


    public String getTelephone() {
        return this.telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }


    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }


    public String getNbrLit() {
        return this.nbrLit;
    }

    public void setNbrLit(String nbrLit) {
        this.nbrLit = nbrLit;
    }


    public String getAddedAt() {
        return this.addedAt;
    }

    public void setAddedAt(String addedAt) {
        this.addedAt = addedAt;
    }


    public String getAddedAtMin() {
        return this.addedAtMin;
    }

    public void setAddedAtMin(String addedAtMin) {
        this.addedAt = addedAtMin;
    }


    public String getAddedAtMax() {
        return this.addedAtMax;
    }

    public void setAddedAtMax(String addedAtMax) {
        this.addedAt = addedAtMax;
    }


    public String getCreatedAt() {
        return this.createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }


    public String getCreatedAtMin() {
        return this.createdAtMin;
    }

    public void setCreatedAtMin(String createdAtMin) {
        this.createdAt = createdAtMin;
    }


    public String getCreatedAtMax() {
        return this.createdAtMax;
    }

    public void setCreatedAtMax(String createdAtMax) {
        this.createdAt = createdAtMax;
    }


    public Boolean getAvailable() {
        return this.available;
    }

    public void setAvailable(Boolean available) {
        this.available = available;
    }



}