package com.hotel.booking.service;

import com.hotel.booking.entity.*;
import com.hotel.booking.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.temporal.ChronoUnit;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepo;

    @Autowired
    private RoomRepository roomRepo;

    @Autowired
    private UserRepository userRepo;

    public Booking bookRoom(Long userId, Long roomId,
                            java.time.LocalDate in,
                            java.time.LocalDate out) {

        Room room = roomRepo.findById(roomId).orElseThrow();

        if (room.getAvailableRooms() <= 0) {
            throw new RuntimeException("No rooms available");
        }

        long days = ChronoUnit.DAYS.between(in, out);
        double total = days * room.getPrice();

        Booking booking = new Booking();
        booking.setUser(userRepo.findById(userId).orElseThrow());
        booking.setRoom(room);
        booking.setCheckInDate(in);
        booking.setCheckOutDate(out);
        booking.setTotalPrice(total);
        booking.setStatus("BOOKED");

        room.setAvailableRooms(room.getAvailableRooms() - 1);

        return bookingRepo.save(booking);
    }
}