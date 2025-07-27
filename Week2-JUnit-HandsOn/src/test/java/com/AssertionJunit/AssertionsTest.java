package com.AssertionJunit;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {
     
        assertEquals(5, 2 + 3, "Expected 2 + 3 to be 5");

        assertTrue(5 > 3, "Expected 5 > 3 to be true");

        assertFalse(5 < 3, "Expected 5 < 3 to be false");


        Object obj1 = null;
        assertNull(obj1, "Expected object to be null");

        Object obj2 = new Object();
        assertNotNull(obj2, "Expected object to be not null");
    }
}