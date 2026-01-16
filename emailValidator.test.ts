const {isValidEmail} = require('./emailValidator');

test('email valide', () => {
    expect(isValidEmail('test@mail.com')).toBe(true);
});

test('sans @', () => {
    expect(isValidEmail('testmail.com')).toBe(false);
});

test('espace présent', () => {
    expect(isValidEmail('test @mail.com')).toBe(false);
});

test('pas de texte avant @', () => {
    expect(isValidEmail('@mail.com')).toBe(false);
});

test('pas de point dans le domaine', () => {
    expect(isValidEmail('test@mailcom')).toBe(false);
});

test('point en dernier caractère', () => {
    expect(isValidEmail('test@mail.')).toBe(false);
});