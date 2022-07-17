
package com.server2.server2.Dto;

import javax.validation.constraints.NotBlank;


public class dtoExperiencia {
    @NotBlank
    private String nombreE;
    @NotBlank
    private String descipcionE;

    public dtoExperiencia() {
    }

    public dtoExperiencia(String nombreE, String descipcionE) {
        this.nombreE = nombreE;
        this.descipcionE = descipcionE;
    }

    public String getNombreE() {
        return nombreE;
    }

    public void setNombreE(String nombreE) {
        this.nombreE = nombreE;
    }

    public String getDescipcionE() {
        return descipcionE;
    }

    public void setDescipcionE(String descipcionE) {
        this.descipcionE = descipcionE;
    }
    
    
}
