package com.hotel.booking.config;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {

    // 🔐 Secret key (minimum 32 chars undali)
    private final String SECRET = "mysecretkeymysecretkeymysecretkey";

    // 🔑 Generate key
    private Key getKey() {
        return Keys.hmacShaKeyFor(SECRET.getBytes());
    }

    // 🔹 Generate Token
    public String generateToken(String email) {
        return Jwts.builder()
                .setSubject(email) // user identifier
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)) // 1 hour
                .signWith(getKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    // 🔹 Extract Email from Token
    public String extractEmail(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getKey())
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    // 🔹 Validate Token
    public boolean validateToken(String token) {
        try {
            extractEmail(token); // parse chesthe valid
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }
}