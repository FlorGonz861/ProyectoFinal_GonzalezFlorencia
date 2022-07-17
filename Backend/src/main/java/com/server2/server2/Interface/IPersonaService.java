package com.server2.server2.Interface;

import com.server2.server2.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    public List<Persona> getPersona();
    
    public void savePersona (Persona persona);
    
    public void deletePersona(Long id);
    
    public Persona findPersona(Long id);
}
