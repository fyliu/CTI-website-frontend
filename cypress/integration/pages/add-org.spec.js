const faker = require('faker');

// eslint-disable-next-line max-lines-per-function
describe('Add Organization Workflow', () => {
  const AUTOCOMPLETE_COUNTRY = 'united';
  const AUTOCOMPLETE_ORG = 'hack';
  const VALID_EMAIL = 'test@test.test';
  const VALID_NAME = faker.company.companyName();
  const VALID_NAME_2 = faker.company.companyName();
  const VALID_PARENT_NAME = faker.company.companyName();
  const VALID_TAG = 'test-tag';
  const VALID_CITY = 'Los Angeles';
  const VALID_STATE = 'CA';
  const VALID_FACEBOOK_URL = 'https://www.facebook.com/hackforla';
  const VALID_MEETUP_URL = 'www.meetup.com/hackforla';
  const VALID_TWITTER_URL = 'www.twitter.com/hackforla';
  const VALID_GITHUB_URL = 'https://github.com/civictechindex/CTI-website-frontend';
  const VALID_WEBSITE_URL = 'testorg.org';

  const DUPLICATE_NAME = 'Code for All';
  const INVALID_EMAIL = 'test@test'
  const INVALID_URL = 'invalidurl!@#$';
  const INVALID_FACEBOOK_URL = 'facebook.com';

  before(() => {
    cy.intercept(`${Cypress.env('REACT_APP_API_URL')}/api/organizations/`).as('getOrganizations');
    cy.visit('/join-index');
    cy.wait('@getOrganizations');
    cy.get('[data-cy=radio-yes]').click();
  });

  it('loads first step and returns to tag generator', () => {
    cy.intercept(`${Cypress.env('REACT_APP_API_URL')}/api/organizations/`).as('getOrganizations');
    cy.get('#container-affiliated').within(() => {
      cy.get('#organization').should('be.empty');
      cy.get('#add-org-link').click();
    });
    cy.wait('@getOrganizations');
    cy.get('[class*=MuiDialog-container]').within(() => {
      cy.get('[class*=makeStyles-progress]').contains('Project Information');
      cy.get('[class*=MuiLinearProgress]').invoke('attr', 'aria-valuenow').should('eq', '50');
      cy.get('[data-cy=org-email-input]').type(INVALID_EMAIL);
      cy.get('[data-cy=org-name-input]').type(DUPLICATE_NAME);
      cy.get('[data-cy=org-website-input]').type(INVALID_URL);
      cy.get('[data-cy=org-github-input]').type(INVALID_URL);
      cy.get('[data-cy=org-tag-input]').type(VALID_TAG);
      cy.get('[data-cy=parent-org-input]').type(AUTOCOMPLETE_ORG);
      cy.get('[data-cy=parent-org-input]').type('{downarrow}{downarrow}{enter}');
      cy.get('[data-cy=cancel-button]').click();
    });
    cy.get('h1').contains('Tag Generator');
    cy.get('#container-affiliated').within(() => {
      cy.get('#organization').should('be.empty');
    });
  });

  it('loads first step and enables the next step button', () => {
    cy.get('#container-affiliated').within(() => {
      cy.get('#add-org-link').click();
    });
    cy.get('[class*=MuiDialog-container]').within(() => {
      cy.get('[data-cy=org-email-input]').should('contain', 'Organization Email');
      cy.get('[data-cy=org-name-input]').should('contain', 'Organization Name');
      cy.get('[data-cy=parent-org-input]').should('contain', 'Parent Organization');
      cy.get('[data-cy=org-website-input]').should('contain', 'Website URL');
      cy.get('[data-cy=org-github-input]').should('contain', 'GitHub URL');
      cy.get('[data-cy=org-tag-input]').should('contain', 'GitHub Tag(s)');
      cy.get('[data-cy=next-button]').should('be.disabled');
      cy.get('[data-cy=org-email-input]').type(INVALID_EMAIL);
      cy.get('[data-cy=org-name-input]').type(DUPLICATE_NAME);
      cy.get('[data-cy=parent-org-input]').type(VALID_PARENT_NAME);
      cy.get('[data-cy=org-website-input]').type(INVALID_URL);
      cy.get('[data-cy=org-github-input]').type(INVALID_URL);
      cy.get('[data-cy=org-tag-input]').type(VALID_TAG);
      cy.get('[data-cy=next-button]').should('not.be.disabled');
    });
  });

  it('loads next step and returns to first step', () => {
    cy.get('[class*=MuiDialog-container]').within(() => {
      cy.get('[data-cy=next-button]').click();
    });
    cy.get('[class*=MuiDialog-container]').within(() => {
      cy.get('[class*=MuiLinearProgress]').invoke('attr', 'aria-valuenow').should('eq', '100');
      cy.get('[data-cy=back-button]').click();
    });
    cy.get('[class*=MuiDialog-container]').within(() => {
      cy.get('[class*=MuiLinearProgress]').invoke('attr', 'aria-valuenow').should('eq', '50');
    });
  });

  it('loads next step and submits org with invalid first step data', () => {
    cy.get('[class*=MuiDialog-container]').within(() => {
      cy.get('[data-cy=next-button]').click();
    });
    cy.get('[class*=MuiDialog-container]').within(() => {
      cy.get('[data-cy=submit-button]').click();
    });
    cy.wait(500);
    cy.get('[class*=MuiDialog-container]').within(() => {
      cy.get('[class*=MuiLinearProgress]').invoke('attr', 'aria-valuenow').should('eq', '50');
      cy.get('[data-cy=org-email-input]').children().eq(2).should('contain', 'Enter a valid email address');
      cy.get('[data-cy=org-name-input]').children().eq(2).should('contain', 'We already have an organization');
      cy.get('[data-cy=org-website-input]').children().eq(2).should('contain', 'Enter a valid URL');
      cy.get('[data-cy=org-github-input]').children().eq(2).should('contain', 'Enter a valid URL');
    });
  });

  it('corrects data in the first step and loads next step', () => {
    cy.get('[class*=MuiDialog-container]').within(() => {
      cy.get('[data-cy=org-email-input]').clear().type(VALID_EMAIL);
      cy.get('[data-cy=org-name-input]').clear().type(VALID_NAME);
      cy.get('[data-cy=org-website-input]').clear().type(VALID_WEBSITE_URL);
      cy.get('[data-cy=org-github-input]').clear().type(VALID_GITHUB_URL);
      cy.get('[data-cy=org-tag-input]').clear().type(VALID_TAG);
      cy.get('[data-cy=parent-org-input]').type(AUTOCOMPLETE_ORG);
      cy.get('[data-cy=parent-org-input]').type('{downarrow}{downarrow}{enter}');
      cy.get('[class*=MuiFormHelperText]').should('not.exist');
      cy.get('[data-cy=next-button]').click();
    });
    cy.get('[class*=MuiDialog-container]').within(() => {
      cy.get('[class*=MuiLinearProgress]').invoke('attr', 'aria-valuenow').should('eq', '100');
    });
  });

  it('submits org with invalid data in next step', () => {
    cy.get('[class*=MuiDialog-container]').within(() => {
      cy.get('[data-cy=org-facebook-input]').type(INVALID_FACEBOOK_URL);
      cy.get('[data-cy=org-twitter-input]').type(INVALID_URL);
      cy.get('[data-cy=org-meetup-input]').type(INVALID_URL);
      cy.get('[data-cy=org-city-input]').type(VALID_CITY);
      cy.get('[data-cy=org-state-input]').type(VALID_STATE);
      cy.get('[data-cy=org-country-input]').type(AUTOCOMPLETE_COUNTRY);
      cy.get('[data-cy=org-country-input]').type('{downarrow}{downarrow}{enter}');
      cy.get('[data-cy=submit-button]').click();
    });
    cy.wait(500);
    cy.get('[class*=MuiDialog-container]').within(() => {
      cy.get('[data-cy=org-facebook-input]').children().eq(2).should('contain', 'Not a valid Facebook URL');
      cy.get('[data-cy=org-twitter-input]').children().eq(2).should('contain', 'Enter a valid URL');
      cy.get('[data-cy=org-meetup-input]').children().eq(2).should('contain', 'Enter a valid URL');
    });
  });

  it('corrects data in the next step and submits the org', () => {
    cy.get('[class*=MuiDialog-container]').within(() => {
      cy.get('[data-cy=org-facebook-input]').clear().type(VALID_FACEBOOK_URL);
      cy.get('[data-cy=org-twitter-input]').clear().type(VALID_TWITTER_URL);
      cy.get('[data-cy=org-meetup-input]').clear().type(VALID_MEETUP_URL);
      cy.get('[class*=MuiFormHelperText]').should('not.exist');
      cy.get('[data-cy=submit-button]').click();
    });
    cy.wait(500);
    cy.get('[class*=MuiDialog-container]').within(() => {
      cy.get('[class*=makeStyles-complete]').should('exist');
    });
  });

  it('should return to tag generator', () => {
    cy.get('[class*=MuiDialog-container]').within(() => {
      cy.get('[class*=makeStyles-return]').within(() => {
        cy.get('[data-cy=return-button]').click();
      });
    });
    cy.get('h1').contains('Tag Generator');
    cy.get('#organization').should('have.value', VALID_NAME);
  });

  it('submits another org with user generated parent org name', () => {
    cy.get('#container-affiliated').within(() => {
      cy.get('#add-org-link').click();
    });
    cy.get('[class*=MuiDialog-container]').within(() => {
      cy.get('[data-cy=org-email-input]').clear().type(VALID_EMAIL);
      cy.get('[data-cy=org-name-input]').clear().type(VALID_NAME_2);
      cy.get('[data-cy=org-website-input]').clear().type(VALID_WEBSITE_URL);
      cy.get('[data-cy=org-github-input]').clear().type(VALID_GITHUB_URL);
      cy.get('[data-cy=org-tag-input]').clear().type(VALID_TAG);
      cy.get('[data-cy=parent-org-input]').type(VALID_PARENT_NAME);
      cy.get('[data-cy=next-button]').click();
    });
    cy.get('[class*=MuiDialog-container]').within(() => {
      cy.get('[data-cy=org-facebook-input]').clear().type(VALID_FACEBOOK_URL);
      cy.get('[data-cy=org-twitter-input]').clear().type(VALID_TWITTER_URL);
      cy.get('[data-cy=org-meetup-input]').clear().type(VALID_MEETUP_URL);
      cy.get('[class*=MuiFormHelperText]').should('not.exist');
      cy.get('[data-cy=submit-button]').click();
    });
    cy.wait(500);
    cy.get('[class*=MuiDialog-container]').within(() => {
      cy.get('[class*=makeStyles-return]').within(() => {
        cy.get('[data-cy=return-button]').click();
      });
    });
    cy.get('#organization').should('have.value', VALID_NAME_2);
  });

  it('loads first step and checks all fields are empty', () => {
    cy.get('#container-affiliated').within(() => {
      cy.get('#add-org-link').click();
    });
    cy.get('[class*=MuiDialog-container]').within(() => {
      cy.get('[data-cy=org-email-input]').should('contain', 'Organization Email');
      cy.get('[data-cy=org-name-input]').should('contain', 'Organization Name');
      cy.get('[data-cy=parent-org-input]').should('contain', 'Parent Organization');
      cy.get('[data-cy=org-website-input]').should('contain', 'Website URL');
      cy.get('[data-cy=org-github-input]').should('contain', 'GitHub URL');
      cy.get('[data-cy=org-tag-input]').should('contain', 'GitHub Tag(s)');
    });
  });

  it('loads next step and checks all fields are empty', () => {
    cy.get('[class*=MuiDialog-container]').within(() => {
      cy.get('[data-cy=org-email-input]').type(VALID_EMAIL);
      cy.get('[data-cy=org-name-input]').type(VALID_NAME);
      cy.get('[data-cy=org-website-input]').type(VALID_WEBSITE_URL);
      cy.get('[data-cy=org-github-input]').type(VALID_GITHUB_URL);
      cy.get('[data-cy=org-tag-input]').type(VALID_TAG);
      cy.get('[data-cy=next-button]').click();
    });
    cy.get('[class*=MuiDialog-container]').within(() => {
      cy.get('[data-cy=org-facebook-input]').should('contain', 'Facebook URL');
      cy.get('[data-cy=org-twitter-input]').should('contain', 'Twitter URL');
      cy.get('[data-cy=org-meetup-input]').should('contain', 'Meetup URL');
      cy.get('[data-cy=org-city-input]').should('contain', 'City');
      cy.get('[data-cy=org-state-input]').should('contain', 'State');
      cy.get('[data-cy=org-country-input]').should('contain', 'Country');
    });
  });
});
