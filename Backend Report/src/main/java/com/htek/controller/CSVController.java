package com.htek.controller;

import com.htek.model.Record;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.annotation.Produces;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

@Controller("/report")
public class CSVController {


    @Get("/csv")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Record> readCSV() {
        List<Record> records = new ArrayList<>();

        String file = "/NewReport.csv";

        try {
            BufferedReader reader = new BufferedReader(new InputStreamReader(getClass().getResourceAsStream(file)));
            String line = reader.readLine(); // skip the header line


            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                String quantity = parts[0];
                String city = parts[1];
                String country = (parts[2]);
                String segment = (parts[3]);


                Record record = new Record(quantity, city, country, segment);
                records.add(record);
            }
        } catch (Exception e) {
            System.out.println(e);
        }
        return records;
    }
}