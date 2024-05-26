package com.example.Notiz_app;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://127.0.0.1:5500") // Erlaubt Anfragen von diesem Ursprung
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Erlaubte HTTP-Methoden
                .allowedHeaders("*") // Erlaubt alle Header
                .allowCredentials(true); // Erlaubt die Übertragung von Cookies
    }
}
