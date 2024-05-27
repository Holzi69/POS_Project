async function downloadNotes() {
    try {
        const response = await fetch('http://localhost:8090/api/notes');
        if (!response.ok) {
            throw new Error(`Fehler: ${response.status} ${response.statusText}`);
        }
        const notes = await response.json();
        const blob = new Blob([JSON.stringify(notes, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'notes.json';
        a.click();
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Fehler beim Herunterladen der Notizen:', error);
    }
}
