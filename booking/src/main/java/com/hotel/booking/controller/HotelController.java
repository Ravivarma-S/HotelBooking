package com.hotel.booking.controller;

import com.hotel.booking.entity.Hotel;
import com.hotel.booking.repository.HotelRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/hotels")
@CrossOrigin
public class HotelController {

    private final HotelRepository repo;

    public HotelController(HotelRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Hotel> getAllHotels() {
        return repo.findAll();
    }

    @PostMapping
    public Hotel addHotel(@RequestBody Hotel hotel) {
        return repo.save(hotel);
    }
}