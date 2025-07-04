package com.library.exercise_2;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext2.xml");

        BookService bookService = (BookService) context.getBean("bookService");
        bookService.displayBook();
    }
}
