$(document).ready(function(){
    // Handler für das Login-Formular
    $('#loginForm').submit(function(event){
        // Verhindere das Standardverhalten des Formulars (Seitenneuladen)
        event.preventDefault();

        // Hole die eingegebenen Benutzerdaten aus dem Formular
        var username = $('#username').val();
        var password = $('#password').val();

        // Definiere gültige Benutzer und ihre Passwörter (hier hartcodiert für das Beispiel)
        var users = [
            { username: 'user1', password: 'pass1', notes: ['Note 1 for user 1', 'Note 2 for user 1'] },
            { username: 'user2', password: 'pass2', notes: ['Note 1 for user 2', 'Note 2 for user 2'] }
        ];

        // Überprüfe, ob die eingegebenen Anmeldeinformationen gültig sind
        var authenticatedUser = users.find(function(user){
            return user.username === username && user.password === password;
        });

        // Überprüfe, ob der Benutzer authentifiziert ist
        if (authenticatedUser) {
            // Anmeldeinformationen sind gültig, speichere den Benutzernamen im localStorage
            localStorage.setItem('loggedInUser', username);
            // Leite den Benutzer zur Verwaltungsseite weiter
            window.location.href = 'Verwaltung.html';
        } else {
            // Anmeldeinformationen sind ungültig, zeige eine Fehlermeldung an
            alert('Falscher Benutzername oder Passwort. Bitte versuchen Sie es erneut.');
        }
    });
});
