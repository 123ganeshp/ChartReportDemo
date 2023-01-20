package com.htek.model;

public class Record {
    private String quantity;

    private String city;
    private String country;
    private String segment;

    public Record() {
    }

    public Record(String quantity, String city, String country, String segment) {
        this.quantity = quantity;
        this.city = city;
        this.country = country;
        this.segment = segment;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getSegment() {
        return segment;
    }

    public void setSegment(String segment) {
        this.segment = segment;
    }

    @Override
    public String toString() {
        return "Record{" +
                "quantity='" + quantity + '\'' +
                ", city='" + city + '\'' +
                ", country='" + country + '\'' +
                ", segment='" + segment + '\'' +
                '}';
    }
}