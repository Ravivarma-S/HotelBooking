package com.hotel.booking.controller;

import com.hotel.booking.dto.BookingRequest;
import com.hotel.booking.entity.Booking;
import com.hotel.booking.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping("/book")
    public Booking book(@RequestBody BookingRequest request) {
        return bookingService.bookRoom(
                request.getUserId(),
                request.getRoomId(),
                request.getCheckIn(),
                request.getCheckOut()
        );
    }
}