Feature('Welcome');

Scenario('Visit the home page', ({ I }) => {
  I.amOnPage('/');

  I.see('Home page');
});
