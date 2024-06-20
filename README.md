# NoteX

Dieses Repository enthält den Quellcode für NoteX, eine umfassende Notizverwaltungsapplikation.

## Inhaltsverzeichnis
- [Überblick](#überblick)
- [Funktionen](#funktionen)
- [Architektur](#architektur)
- [Installation](#installation)
- [Konfiguration](#konfiguration)
- [Verwendung](#verwendung)
- [API-Endpunkte](#api-endpunkte)


## Überblick
NoteX ist eine ausgeklügelte Notizverwaltungsapplikation, die Benutzern hilft, ihre Notizen nahtlos zu erstellen, zu bearbeiten und zu verwalten. Das Projekt umfasst eine Desktop-Applikation, eine Web-Applikation und einen Backend-Server. Der Server verwaltet Datenoperationen und wird in IntelliJ ausgeführt, während der Web-Client mit der Live Server-Erweiterung in Visual Studio Code bedient wird.

## Funktionen
- Mithilfe der CRUD Funktionen Notizen erstellen, bearbeiten und löschen
- Notizen kategorisieren
- Notizen durchsuchen
- Responsives Web-Interface

## Architektur
Die NoteX-Applikation ist in drei Hauptkomponenten unterteilt:
1. **Backend-Server**: Verwaltet alle datenbezogenen Operationen und ist in Java geschrieben. Er läuft auf `localhost:8090`.
2. **Web-Applikation**: Bietet eine benutzerfreundliche Oberfläche zur Interaktion mit den Notizen und läuft auf `http://127.0.0.1:5500` unter Verwendung der Live Server-Erweiterung in Visual Studio Code.
3. **Desktop-Applikation**: Eine WPF-Applikation, die auf Windows läuft und dieselben Funktionen wie die Web-Applikation bietet.

## Installation

### Voraussetzungen
- Java Development Kit (JDK)
- IntelliJ IDEA
- Node.js und npm
- Visual Studio Code
- Live Server-Erweiterung für Visual Studio Code
- .NET Framework (für die WPF-Desktop-Applikation)


## Verwendung

### Server starten
1. Öffne IntelliJ IDEA.
2. Starte das Backend-Server-Projekt.
3. Stelle sicher, dass der Server unter `http://localhost:8090` zugänglich ist.

### Web-Applikation starten
1. Öffne Visual Studio Code.
2. Navigiere zum `Notiz_website` Verzeichnis.
3. Starte den Live Server, indem du mit der rechten Maustaste auf die `index.html` Datei klickst und `Open with Live Server` auswählst.
4. Die Web-Applikation sollte nun unter `http://127.0.0.1:5500` zugänglich sein.

### Desktop-Applikation starten
1. Öffne Visual Studio.
2. Lade das `NotizAppDesktop` Projekt.
3. Baue und starte die Desktop-Anwendung.

   
## Konfiguration
Stelle sicher, dass der Backend-Server auf `localhost:8090` läuft und sowohl die Web- als auch die Desktop-Applikation darauf zugreifen können. Die Konfigurationsdateien müssen möglicherweise angepasst werden, um die korrekten Endpunkte und Ports widerzuspiegeln.

# Veranschaulichung

## Funktionen der WebApp

### Erstellen einer Notiz

![Erstellen einer Notiz](./BilderDoku/Web/Notizhinzufuegen_1.png)
![Erstellen einer Notiz](./BilderDoku/Web/NotizSpeichern.png)<br>
Um eine neu Notiz zu speichern muss man zuerst den blauen Plus-Button drücken, wie in Bild 1 dargestellt. <br> 
Beim drücken des Knopfs öffnet sich ein Fenster welches die Knöpfe Speichern, Abbrechen und Löschen enthält. Beim drücken von Speichern wird die Notiz gespeichert, egal ob man gerade eine neue Notiz erstellt oder eine bereits Vorhandene bearbeitet. Beim drücken vom Abbrechen Knopf wird das Fenster zum hinzufügen/bearbeiten zugeklappt. Wenn man den Löschen Knopf drückt wird die aktuelle Notiz aus der Datenbank gelöscht.

### Anzeigen der Notizen

![Anzeigen der Notiz](./BilderDoku/Web/NotizAnzeigen.png)<br>
Wenn eine Notiz via WebApp oder DesktopApp in der Datenbank angelegt hat, kann man diese wieder anzeigen lassen, wenn man auf den Knopf mit dem Titel der benötigten Notiz drückt. <br> So kann man beispielsweise die Notiz löschen oder aktualisieren.

### Ändern einer Notiz

![Ändern der Notiz](./BilderDoku/Web/NotizAnzeigen.png)
![Ändern einer Notiz](./BilderDoku/Web/NotizSpeichern.png)<br>
Um eine Notiz zu Ändern muss man wie im Schritt zuvor eine der bereits vorhandenen Notizen auswählen und entweder den Inhalt oder den Titel der Notiz bearbeiten.<br> Um das ganze dann in der Datenbank zu Speichern muss man nur noch den Speichern Knopf drücken- Dann sendet die Anwendung ein Request and den Server, welcher die neuen Daten in die Datenbank speichert.

### Löschen der Notiz

![Löschen der Notiz](./BilderDoku/Web/NotizAnzeigen.png)
![Löschen der Notiz](./BilderDoku/Web/NotizSpeichern.png)<br>
Will man die Notiz doch Löschen, so drückt man einfach den Löschen Knopf und der Server empfängt den Befehl zum löschen der Notiz.<br>

## Funktionen der WPF-Anwendung

### Erstellen einer Notiz

![Erstellen einer Notiz](./BilderDoku/WPF/NotizInhalte.png)
![Erstellen einer Notiz](./BilderDoku/WPF/NotizKnöpfe.png)<br>
Um eine neue Notiz hinzuzufügen muss man zuerst die Felder in Bild 1 ausfüllen und den Speichern Knopf drücken. <br> 
Der Server legt dann automatisch eine neue Notiz an.

### Anzeigen einer Notz

![Erstellen einer Notiz](./BilderDoku/WPF/NotizKnöpfe.png)
![Erstellen einer Notiz](./BilderDoku/WPF/NotizInhalte.png)<br>
Soll eine bereits vorhandene Notiz angezeigt werden, drückt der Benutzer die benötigte Notiz, wie in Bild 1, so werden die Daten der Notiz in den Feldern "Notiz Überschrift" und "Notiz Inhalt" angezeigt.<br>

### Ändern einer Notiz

![Erstellen einer Notiz](./BilderDoku/WPF/NotizKnöpfe.png)
![Erstellen einer Notiz](./BilderDoku/WPF/NotizInhalte.png)<br>
Um eine Notiz zu ändern muss man zuerst eine Notiz, wie beim Anzeigen, auswählen. Dann kann man einfach die zu Ändernden Daten umschreiben, und der Server ändert die Daten in der Datenbank.<br>

###  Löschen einer Notiz

![Erstellen einer Notiz](./BilderDoku/WPF/NotizKnöpfe.png)
![Erstellen einer Notiz](./BilderDoku/WPF/NotizInhalte.png)<br>
Will der Benutzer eine Notiz aus der Datenbank entfernen muss er zuerst eine Notiz auswählen, wie in Bild 1, und den Löschen Knopf drücken. Danach wird ein Befehl an den Server geschickt, welcher wiederum die zu löschenden Daten aus der Datenbank entfernt.<br>


## API-Endpunkte

### Alle Notizen abrufen
- **Endpunkt**: `/api/notes`
- **Methode**: GET
- **Funktion**: getAllNotes()
- **Beschreibung**: Ruft alle Notizen ab.
- **Antwort**:
  ```json
  [
    {
      "id": 1,
      "titel": "Notiz-Titel",
      "content": "Inhalt der Notiz",  
    },
    ...
  ]
  
### Notiz nach ID abrufen
- **Endpunkt**: `/api/notes/{id}`
- **Methode**: GET
- **Funktion**: getNoteById(long id)
- **Beschreibung**: Ruft eine einzelne Notiz anhand ihrer ID ab.
- **Antwort**:
- **Falls die Notiz existiert:**
```json
    {
      "id": 1,
      "titel": "Notiz-Titel",
      "content": "Inhalt der Notiz",
    }
   
```
#### Falls die Notiz nicht existiert:
- **Statuscode**: 404 Not Found

### Neue Notiz erstellen
- **Endpunkt**: `/api/notes`
- **Methode**: POST
- **Funktion**: createNote(Note note)
- **Beschreibung**: Erstellt eine neue Notiz
- 
- **Request Body:**:
```json

{
  "titel": "Neue Notiz",
  "content": "Inhalt der neuen Notiz"
}
```
- **Antwort**:
- **Statuscode**: 201 Created
- **Response Body**:
```json

{
  "id": 3,
  "titel": "Neue Notiz",
  "content": "Inhalt der neuen Notiz"
}
```

### Notiz aktualisieren
- **Endpunkt**: `/api/notes/{id}`
- **Methode**: PUT
- **Funktion**:updateNote(long id, Note noteDetails)
- **Beschreibung**:  Aktualisiert eine vorhandene Notiz anhand ihrer ID.

- **Request Body:**:
```json

{
  "titel": "Aktualisierte Notiz",
  "content": "Neuer Inhalt"
}
```
- **Antwort**:
- **Falls die Notiz aktualisiert wurde**:
```json

{
  "id": 1,
  "titel": "Aktualisierte Notiz",
  "content": "Neuer Inhalt"
}
```
- **Falls die Notiz nicht gefunden wurde**:
- **Statuscode**: 404 Not Found

### Notiz löschen
- **Endpunkt**: `/api/notes/{id}`
- **Methode**: DELETE
- **Funktion**: deleteNote(long id)
- **Beschreibung**: Löscht eine Notiz anhand ihrer ID.

-  **Antwort**:
- **Statuscode**: 200 OK


## Diskussion der Ergebnisse

Am Ende dieser monatelangen Entwicklung präsentiere ich die erste Version der Notizapp. Die Benutzeroberfläche ist einfach und übersichtlich gestaltet, sowohl für WPF als auch für Web, was das Erstellen, Bearbeiten und Löschen von Notizen vereinfacht. Die zuverlässige Speicherung der Daten in einer MongoDB-Datenbank gewährleistet jederzeitigen Zugriff und Sicherheit.

### Zusammenfassung

Die Notizapp bietet eine einfache Benutzeroberfläche sowohl als Desktop-Anwendung als auch als WebApp. Die REST-API ermöglicht Echtzeitkommunikation mit der Datenbank.

### Hintergründe

Die Entwicklung der App konzentrierte sich stark auf Benutzerfreundlichkeit. Die Verwendung moderner Technologien wie Spring-Boot, WPF, HTML, CSS, JavaScript und JSON stellt sicher, dass die API für zukünftige Anforderungen gerüstet ist. Die Nutzung von MongoDB gewährleistet sichere Speicherung und effiziente Datenverwaltung.

### Ausblick

Zukünftig wird die Notizapp um neue Funktionen erweitert, wie die Organisation von Notizen in Ordnern oder Kategorien sowie die Unterstützung von Rich-Text-Formatierung. Ein Benachrichtigungssystem kann implementiert werden, um Benutzer über wichtige Ereignisse zu informieren. Kontinuierliches Benutzerfeedback wird genutzt, um die Benutzerfreundlichkeit weiter zu verbessern und eine effiziente Notizverwaltung zu gewährleisten.




