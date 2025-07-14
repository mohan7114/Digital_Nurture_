package com.cognizant.springlearn;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.cognizant.springcore.model.Country;

@SpringBootApplication
public class SpringlearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringlearnApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(SpringlearnApplication.class, args);
        LOGGER.info("Inside main");

        displayCountries();
    }

    public static void displayCountries() {
        LOGGER.info("START - displayCountries");

        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");

        @SuppressWarnings("unchecked")
        List<Country> countryList = (List<Country>) context.getBean("countryList");

        for (Country country : countryList) {
            LOGGER.debug("Country: {}", country);
        }

        LOGGER.info("END - displayCountries");
    }
}
