package com.example.boatapp.service;

import com.example.boatapp.entity.Boat;
import com.example.boatapp.exceptions.BoatNotFoundException;
import com.example.boatapp.repository.BoatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BoatService {

    private BoatRepository boatRepository;

    @Autowired
    public BoatService(BoatRepository boatRepository) {
        this.boatRepository = boatRepository;
    }

    public Page<Boat> findAllBoats(Pageable page, String search) {
        return boatRepository.findAllByNameOrDescriptionLike(search, page);
    }

    public Optional<Boat> findById(Long id) {
        return boatRepository.findById(id);
    }

    public Boat createBoat(Boat boat) {
        return boatRepository.save(boat);
    }

    public void deleteBoat(Long id) throws BoatNotFoundException {
        if (boatRepository.existsById(id))
            boatRepository.deleteById(id);
        else
            throw new BoatNotFoundException("There is not a boat with id=" + id);
    }

    public Boat updateBoat(Long id, Boat boat) throws BoatNotFoundException {
        if (boatRepository.existsById(id))
            return boatRepository.save(boat);
        else
            throw new BoatNotFoundException("There is not a boat with id=" + id);
    }

}
