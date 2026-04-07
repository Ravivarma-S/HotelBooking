package com.hotel.booking.dto;

import lombok.Data;

@Data
public class RoomRequest {

    private Long hotelId;
    private String roomType;
    private double price;
    private int capacity;
    private int availableRooms;
}