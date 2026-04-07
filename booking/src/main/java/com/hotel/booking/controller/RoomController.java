package com.hotel.booking.controller;

import com.hotel.booking.entity.Room;
import com.hotel.booking.entity.Hotel;
import com.hotel.booking.repository.RoomRepository;
import com.hotel.booking.repository.HotelRepository;
import com.hotel.booking.dto.RoomRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rooms")
@CrossOrigin
public class RoomController {

    @Autowired
    private RoomRepository roomRepo;

    @Autowired
    private HotelRepository hotelRepo;

    // 🔹 GET all rooms
    @GetMapping
    public List<Room> getRooms() {
        return roomRepo.findAll();
    }

    // 🔹 ADD room (FINAL FIXED VERSION using DTO)
    @PostMapping
    public Room addRoom(@RequestBody RoomRequest request) {

        // 1. Check hotelId
        if (request.getHotelId() == null) {
            throw new RuntimeException("Hotel ID is required");
        }

        // 2. Fetch hotel from DB
        Hotel hotel = hotelRepo.findById(request.getHotelId())
                .orElseThrow(() -> new RuntimeException("Hotel not found with id: " + request.getHotelId()));

        // 3. Create Room object
        Room room = new Room();
        room.setHotel(hotel);
        room.setRoomType(request.getRoomType());
        room.setPrice(request.getPrice());
        room.setCapacity(request.getCapacity());
        room.setAvailableRooms(request.getAvailableRooms());

        // 4. Save room
        return roomRepo.save(room);
    }
}