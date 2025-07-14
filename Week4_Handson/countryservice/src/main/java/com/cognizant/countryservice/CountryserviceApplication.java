package com.cognizant.countryservice;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CountryserviceApplication {

	private static final Logger LOGGER = LoggerFactory.getLogger(CountryserviceApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(CountryserviceApplication.class, args);
		LOGGER.info("Inside main");
	}
}
