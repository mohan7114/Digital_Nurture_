package com.AAApattern;

import org.junit.jupiter.api.*;

import com.week2.Settingupjunit.*;

import static org.junit.jupiter.api.Assertions.*;

@TestInstance(TestInstance.Lifecycle.PER_METHOD)
public class CalculatorLifecycleTest {

    private Calculator calculator;

    @BeforeEach
    void setUp() {
        System.out.println("Setting up Calculator instance");
        calculator = new Calculator(); 
    }

    @AfterEach
    void tearDown() {
        System.out.println("Tearing down Calculator instance");
        calculator = null; 
    }

    @Test
    void testAdd() {
  
        int result = calculator.add(10, 5);

        assertEquals(15, result, "Expected 10 + 5 = 15");
    }

    @Test
    void testSubtract() {
   
        int result = calculator.subtract(10, 5);

        assertEquals(5, result, "Expected 10 - 5 = 5");
    }
}

