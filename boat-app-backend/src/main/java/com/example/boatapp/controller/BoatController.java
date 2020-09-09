package com.example.boatapp.controller;

import com.example.boatapp.entity.Boat;
import com.example.boatapp.exceptions.BoatNotFoundException;
import com.example.boatapp.service.BoatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("boats")
public class BoatController {

    private BoatService boatService;

    @Autowired
    public BoatController(BoatService boatService) {
        this.boatService = boatService;
    }

    @GetMapping
    public Page<Boat> findAllBoats(Pageable page, @RequestParam String search) {
        return boatService.findAllBoats(page, search);
    }

    @GetMapping("{id}")
    public ResponseEntity findBoatById(@PathVariable("id") Long id) {
        try {
            Optional<Boat> optionalBoat = boatService.findById(id);
            return ResponseEntity.ok(optionalBoat.get());
        } catch (BoatNotFoundException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity createBoat(@RequestBody Boat boat) {
        return ResponseEntity.ok(boatService.createBoat(boat));
    }

    @PutMapping("{id}")
    public ResponseEntity updateBoat(@PathVariable("id") Long id, @RequestBody Boat boat) {
        try {
            return ResponseEntity.ok(boatService.updateBoat(id, boat));
        } catch (BoatNotFoundException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("{id}")
    public ResponseEntity deleteBoat(@PathVariable("id") Long id) {
        try {
            boatService.deleteBoat(id);
            return ResponseEntity.ok("Boat with id=" + id + " has been deleted.");
        } catch (BoatNotFoundException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

}
