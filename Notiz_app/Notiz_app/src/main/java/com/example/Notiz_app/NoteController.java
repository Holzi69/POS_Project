package com.example.Notiz_app;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notes")
public class NoteController {

    @Autowired
    private NoteService noteService;

    @GetMapping
    public List<Note> getAllNotes() {
        return noteService.getAllNotes();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Note> getNoteById(@PathVariable long id) {
        Note note = noteService.getNoteById(id);
        if (note != null) {
            return ResponseEntity.ok().body(note);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Note> createNote(@RequestBody Note note) {
        noteService.create(note);
        return ResponseEntity.status(HttpStatus.CREATED).body(note);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Note> updateNote(@PathVariable long id, @RequestBody Note noteDetails) {
        Note updatedNote = noteService.update(id, noteDetails);
        if (updatedNote != null) {
            return ResponseEntity.ok().body(updatedNote);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteNote(@PathVariable long id) {
        noteService.delete(id);
        return ResponseEntity.ok().build();
    }
}