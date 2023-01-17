package com.ana.test.ws.rest.provided.vo;


public class ReservationVo {

    private String id;
    private ClientVo clientVo;

    private ChambreVo chambreVo;

    private String reference;
    private String status;
    private String dateDebut;
    private String dateDebutMin;
    private String dateDebutMax;
    private String dateFin;
    private String dateFinMin;
    private String dateFinMax;
    private String dayNumber;
    private Boolean valid;


    public ReservationVo() {
                   super();
           }



    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }


    public ClientVo getClientVo() {
        return this.clientVo;
    }

    public void setClientVo(ClientVo clientVo) {
        this.clientVo = clientVo;
    }


    public ChambreVo getChambreVo() {
        return this.chambreVo;
    }

    public void setChambreVo(ChambreVo chambreVo) {
        this.chambreVo = chambreVo;
    }


    public String getReference() {
        return this.reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }


    public String getStatus() {
        return this.status;
    }

    public void setStatus(String status) {
        this.status = status;
    }


    public String getDayNumber() {
        return this.dayNumber;
    }

    public void setDayNumber(String dayNumber) {
        this.dayNumber = dayNumber;
    }


    public String getDateDebut() {
        return this.dateDebut;
    }

    public void setDateDebut(String dateDebut) {
        this.dateDebut = dateDebut;
    }


    public String getDateDebutMin() {
        return this.dateDebutMin;
    }

    public void setDateDebutMin(String dateDebutMin) {
        this.dateDebut = dateDebutMin;
    }


    public String getDateDebutMax() {
        return this.dateDebutMax;
    }

    public void setDateDebutMax(String dateDebutMax) {
        this.dateDebut = dateDebutMax;
    }


    public String getDateFin() {
        return this.dateFin;
    }

    public void setDateFin(String dateFin) {
        this.dateFin = dateFin;
    }


    public String getDateFinMin() {
        return this.dateFinMin;
    }

    public void setDateFinMin(String dateFinMin) {
        this.dateFin = dateFinMin;
    }


    public String getDateFinMax() {
        return this.dateFinMax;
    }

    public void setDateFinMax(String dateFinMax) {
        this.dateFin = dateFinMax;
    }


    public Boolean getValid() {
        return this.valid;
    }

    public void setValid(Boolean valid) {
        this.valid = valid;
    }



}