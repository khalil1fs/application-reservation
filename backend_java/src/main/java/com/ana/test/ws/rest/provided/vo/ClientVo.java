package com.ana.test.ws.rest.provided.vo;


public class ClientVo {

    private String id;
    private String name;
    private String lastName;
    private String cin;
    private String phone;
    private String birthDate;
    private String birthDateMin;
    private String birthDateMax;
    private String createdAt;
    private String createdAtMin;
    private String createdAtMax;
    private String age;
    private Boolean valid;


    public ClientVo() {
                   super();
           }



    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }


    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public String getLastName() {
        return this.lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }


    public String getCin() {
        return this.cin;
    }

    public void setCin(String cin) {
        this.cin = cin;
    }


    public String getPhone() {
        return this.phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }


    public String getAge() {
        return this.age;
    }

    public void setAge(String age) {
        this.age = age;
    }


    public String getBirthDate() {
        return this.birthDate;
    }

    public void setBirthDate(String birthDate) {
        this.birthDate = birthDate;
    }


    public String getBirthDateMin() {
        return this.birthDateMin;
    }

    public void setBirthDateMin(String birthDateMin) {
        this.birthDate = birthDateMin;
    }


    public String getBirthDateMax() {
        return this.birthDateMax;
    }

    public void setBirthDateMax(String birthDateMax) {
        this.birthDate = birthDateMax;
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


    public Boolean getValid() {
        return this.valid;
    }

    public void setValid(Boolean valid) {
        this.valid = valid;
    }



}