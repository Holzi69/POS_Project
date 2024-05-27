package com.example.Notiz_app;

import com.mongodb.client.*;
import org.bson.Document;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class NoteService{
    private final MongoClient mongoClient;
    private final MongoDatabase database;
    private final MongoCollection<Document> collection;

    public NoteService() {
        // Connect to the MongoDB server
        mongoClient = MongoClients.create("mongodb+srv://Holz:Stolz005@atlascluster.bc2su0k.mongodb.net/NoteDB");

        // Get access to the database
        database = mongoClient.getDatabase("NoteDB");

        // Get access to the collection
        collection = database.getCollection("Notes");
    }

    public void create(Note note) {
        // Convert Note object to a MongoDB Document
        long nextId = getNextId(collection);
        Document document = new Document()
                .append("_id", nextId)
                .append("title", note.getTitle())
                .append("content", note.getContent());

        // Insert the document into the collection
        collection.insertOne(document);
    }


    // Function to get the next _id value
    private static long getNextId(MongoCollection<Document> collection) {
        // Query the collection to get the maximum _id value
        Document maxIdDocument = collection.find().sort(new Document("_id", -1)).first();

        // If no documents exist, start with 1, otherwise increment the maximum value
        if (maxIdDocument != null) {
            return maxIdDocument.getLong("_id") + 1;
        } else {
            return 1;
        }
    }

    public Note read(long id) {
        // Find the document by its ID
        Document document = collection.find(new Document("_id", id)).first();

        // Convert Document to Note object
        Note note = new Note();
        note.setId(document.getLong("_id"));
        note.setTitle(document.getString("title"));
        note.setContent(document.getString("content"));

        return note;
    }


    public List<Note> getAllNotes() {
        List<Note> notes = new ArrayList<>();
        FindIterable<Document> iterable = collection.find();
        for (Document document : iterable) {
            Note note = new Note();
            note.setId(document.getLong("_id"));
            note.setTitle(document.getString("title"));
            note.setContent(document.getString("content"));
            notes.add(note);
        }
        return notes;
    }

    public Note getNoteById(long id) {
        Document document = collection.find(new Document("_id", id)).first();
        if (document != null) {
            Note note = new Note();
            note.setId(document.getLong("_id"));
            note.setTitle(document.getString("title"));
            note.setContent(document.getString("content"));
            return note;
        } else {
            return null; // Note with the given ID not found
        }
    }

    public Note update(long id, Note updatedNote) {
        // Convert Note object to a MongoDB Document
        Document document = new Document()
                .append("title", updatedNote.getTitle())
                .append("content", updatedNote.getContent());

        // Update the document in the collection
        collection.updateOne(new Document("_id", id), new Document("$set", document));
        return updatedNote;
    }

    public void delete(long id) {
        // Delete the document from the collection
        collection.deleteOne(new Document("_id", id));
    }
}