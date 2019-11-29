package com.telstra.user.behaviour.web;

import java.util.LinkedHashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.telstra.user.behaviour.model.Latitude;

@RestController
@RequestMapping("/api")
public class MapController {

	private final Logger log = LoggerFactory.getLogger(MapController.class);
	Map<String, Latitude> locations = new LinkedHashMap<String, Latitude>();
	Map<String, Latitude> hotels = new LinkedHashMap<String, Latitude>();

	@GetMapping("/locations")
	Map<String, Latitude> locations() {
		locations.put("0", new Latitude(5, 9));
		locations.put("1", new Latitude(5, 6));
		locations.put("2", new Latitude(3, 6));
		locations.put("3", new Latitude(4, 5));
		locations.put("4", new Latitude(6, 5));
		locations.put("5", new Latitude(5, 7));
		locations.put("6", new Latitude(7, 7));
		locations.put("7", new Latitude(2, 8));
		locations.put("8", new Latitude(1, 3));
		locations.put("9", new Latitude(6, 1));
		
		log.info("Locations: {}", locations);
		return locations;
	}

	@GetMapping("/hotels")
	Map<String, Latitude> hotels() {
		hotels.put("Sagar", new Latitude(5, 9));
		hotels.put("Meridian", new Latitude(5, 9));
		hotels.put("Hill Top", new Latitude(3, 6));
		hotels.put("Kaveri", new Latitude(4, 5));
		hotels.put("Ibis", new Latitude(3, 6));
		hotels.put("Oyo Rooms", new Latitude(5, 9));
		hotels.put("Shiv Sagar", new Latitude(5, 9));
		hotels.put("Cozy Nest", new Latitude(5, 9));
		hotels.put("Sonar Bangla", new Latitude(7, 7));
		hotels.put("Radisson Blue", new Latitude(5, 9));
		
		log.info("Hotels: {}", hotels);
		return hotels;
	}

}
