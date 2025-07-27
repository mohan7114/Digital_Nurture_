package com.week2.SettingupjunitTest;
import org.junit.jupiter.api.Test;

import com.week2.Settingupjunit.*;

import static org.junit.jupiter.api.Assertions.*;
class CalculatorTest {

    @Test
    void testAdd() {
        Calculator calc = new Calculator();
        assertEquals(15, calc.add(10, 5));
    }

    @Test
    void testSubtract() {
        Calculator calc = new Calculator();
        assertEquals(5, calc.subtract(10, 5));
    }

    @Test
    void testMultiply() {
        Calculator calc = new Calculator();
        assertEquals(50, calc.multiply(10, 5));
    }

    @Test
    void testDivide() {
        Calculator calc = new Calculator();
        assertEquals(2, calc.divide(10, 5));
    }

    @Test
    void testDivideByZero() {
        Calculator calc = new Calculator();
        assertThrows(ArithmeticException.class, () -> calc.divide(10, 0));
    }
}