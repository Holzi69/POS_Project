package com.example.Notiz_app;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository("mongoNoteRepository")
public interface NoteRepository extends MongoRepository<Note, String> {
}