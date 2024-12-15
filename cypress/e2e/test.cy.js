describe('Meine erste Test-Suite', () => {
    it('Besucht die App und überprüft den Titel', () => {
        cy.visit('http://localhost:3000'); // Stelle sicher, dass deine App lokal läuft
        cy.get('h1').should('contain', 'Auswirkungen der Formel 1 auf die Umwelt'); // Beispiel-Assertion
    });
});
