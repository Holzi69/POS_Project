
async function fetchAndDisplayNotes() {
    try {
        const response = await axios.get('http://localhost:8080/api/notes');
        const notes = response.data;

        const notesList = document.getElementById('notesList');
        notesList.innerHTML = ''; // Leeren der Liste

        notes.forEach(note => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.textContent = `Titel: ${note.title}, Inhalt: ${note.content}`;
            notesList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Fehler beim Abrufen und Anzeigen der Notizen:', error);
    }
}

// Funktion zum Hinzufügen einer neuen Notiz
async function addNote(event) {
    console.warn("test")
    event.preventDefault();

    const formData = new FormData(document.getElementById('addNoteForm'));
    console.warn(formData);
    try {
        await axios.post('http://localhost:8080/api/notes', formData);
        fetchAndDisplayNotes(); // Aktualisieren der Anzeige
    } catch (error) {
        console.error('Fehler beim Hinzufügen der Notiz:', error);
    }
}

// Event Listener zum Anhängen der Funktionen an die entsprechenden Ereignisse
document.getElementById('addNoteForm').addEventListener('submit', addNote);

// Beim Laden der Seite: Notizen abrufen und anzeigen
fetchAndDisplayNotes();
