package com.example.Notiz_app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.HttpURLConnection;
import java.net.URL;

@RestController
public class HealthController {

    @Autowired
    private NoteRepository noteRepository; // Annahme: Hier wird eine Datenbankverbindung benötigt

    @GetMapping("/health")
    public String checkHealth() {
        // Überprüfen, ob die Datenbankverbindung verfügbar ist
        try {
            noteRepository.findAll(); // Beispielabfrage, um die Datenbankverbindung zu testen
            // Überprüfung erfolgreich, die Datenbankverbindung ist verfügbar
        } catch (Exception e) {
            // Fehler beim Zugriff auf die Datenbank
            return "DOWN"; // Rückgabe des Status "DOWN"
        }

        // Optional: Weitere Überprüfungen hier einfügen, z. B. auf externe Dienste

        return "UP"; // Rückgabe des Status "UP", wenn alle Überprüfungen erfolgreich sind
    }
}
