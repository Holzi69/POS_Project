document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Document loaded, starting to load notes...');
    loadNotes();

    document.getElementById('noteForm').addEventListener('submit', function (e) {
        e.preventDefault();
        addNote();
    });
});

async function loadNotes() {
    try {
        const response = await fetch('http://localhost:8090/api/notes');
        if (!response.ok) {
            throw new Error(`Fehler: ${response.status} ${response.statusText}`);
        }
        const notes = await response.json();
        console.log('Notes loaded:', notes);
        displayNotes(notes);
    } catch (error) {
        console.error('Fehler beim Laden der Notizen:', error);
    }
}

function displayNotes(notes) {
    const notesDiv = document.getElementById('notes');
    notesDiv.innerHTML = '';
    notes.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.className = 'note';
        noteElement.innerHTML = `
            <h2>${note.title}</h2>
            <p>${note.content}</p>
            <button onclick="deleteNote(${note.id})">Löschen</button>
            <button onclick="editNoteForm(${note.id}, '${note.title}', '${note.content}')">Bearbeiten</button>
        `;
        notesDiv.appendChild(noteElement);
    });
}

async function addNote() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const newNote = { title, content };

    try {
        const response = await fetch('http://localhost:8090/api/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newNote)
        });
        if (!response.ok) {
            throw new Error(`Fehler: ${response.status} ${response.statusText}`);
        }
        console.log('Note added:', newNote);
        loadNotes();
        document.getElementById('noteForm').reset();
    } catch (error) {
        console.error('Fehler beim Hinzufügen der Notiz:', error);
    }
}

async function deleteNote(id) {
    try {
        const response = await fetch(`http://localhost:8090/api/notes/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error(`Fehler: ${response.status} ${response.statusText}`);
        }
        console.log('Note deleted, ID:', id);
        loadNotes();
    } catch (error) {
        console.error('Fehler beim Löschen der Notiz:', error);
    }
}

function editNoteForm(id, title, content) {
    document.getElementById('title').value = title;
    document.getElementById('content').value = content;
    const submitButton = document.querySelector('#noteForm button');
    submitButton.textContent = 'Aktualisieren';
    submitButton.onclick = function (e) {
        e.preventDefault();
        updateNote(id);
        submitButton.textContent = 'Hinzufügen';
        submitButton.onclick = addNote;
    };
}

async function updateNote(id) {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const updatedNote = { title, content };

    try {
        const response = await fetch(`http://localhost:8090/api/notes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedNote)
        });
        if (!response.ok) {
            throw new Error(`Fehler: ${response.status} ${response.statusText}`);
        }
        console.log('Note updated:', updatedNote);
        loadNotes();
        document.getElementById('noteForm').reset();
    } catch (error) {
        console.error('Fehler beim Aktualisieren der Notiz:', error);
    }
}
