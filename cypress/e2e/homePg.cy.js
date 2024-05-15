describe('Verify Header section', () => {
  it('verify the header section text', () => {
    cy.visit('http://127.0.0.1:5500/index.html');

    // get content within Header section iframe
    cy.get('#ooricLogo').should('have.attr', 'src').and('include', 'ooricLogo.png');

    cy.contains('Home');
    cy.get('ul li a').eq(0).should('have.class', 'active'); // Verify Home is active
    cy.contains('About');
    cy.get('ul li a').eq(1).should('have.attr', 'href').and('include', 'about.html');
    cy.get('ul li a').eq(1).should('not.have.class', 'active');

    cy.contains('Work'); // menu
    cy.get('span.caret').should('exist');

    cy.contains('Roles');
    cy.get('ul li a').eq(2).should('have.attr', 'href').and('include', 'roles.html');
    cy.get('ul li a').eq(2).should('not.have.class', 'active');
    cy.contains('Deloitte Digital');
    cy.get('ul li a').eq(3).should('have.attr', 'href').and('include', 'deloitte.html');
    cy.get('ul li a').eq(3).should('not.have.class', 'active');
    cy.contains('Amazon');
    cy.get('ul li a').eq(4).should('have.attr', 'href').and('include', 'amazon.html');
    cy.get('ul li a').eq(4).should('not.have.class', 'active');
    cy.contains('Microsoft');
    cy.get('ul li a').eq(5).should('have.attr', 'href').and('include', 'microsoft.html');
    cy.get('ul li a').eq(5).should('not.have.class', 'active');

    cy.contains('Contact Eric');
    cy.get('ul li a').eq(6).should('have.attr', 'href').and('include', 'contact.html');
    cy.get('ul li a').eq(6).should('not.have.class', 'active');
  })
})

// TO DO: Verify hamburger menu on mobile

describe('Verify Home Page greeting text header', () => {
  it('verify the greeting text header', () => {
    cy.visit('http://127.0.0.1:5500/index.html');

    cy.contains('Hi, I\'m Eric Waldbaum');
    cy.get('#welcome-padding')
    .should('have.css', 'font-size', '72px')
    .should('have.css', 'font-family', 'Raleway, sans-serif');;
  })
})

describe('Verify Home Page greeting text', () => {
  it('verify the greeting text', () => {
    cy.visit('http://127.0.0.1:5500/index.html');

    cy.contains('Software Quality Engineer Lead');
    cy.contains('Automates across platforms');
    cy.contains('Assists with Project Management, UX Design, & Coding');
    cy.contains('Passionate about new technology, accessibility, & helping others');

    cy.contains('Continuous Learner');
    cy.contains('Explorer & Reviewer, Pickleball Player, Friends & Family-oriented');

    cy.get('p')
      .should('have.css', 'font-size', '16px')
      .should('have.css', 'font-family', 'Poppins, sans-serif')
      .should('have.css', 'color', 'rgb(249, 249, 249)'); // #F9F9F9
  })
})

describe('Verify Home Page scroll text', () => {
  it('verify the scroll text', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.contains('SCROLL');
  })
})

describe('Verify Home Page work history section', () => {
  it('verify the work history text', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    
    cy.contains('My work history');
    cy.get('.projects-section-header')
      .should('have.css', 'color', 'rgb(33, 150, 243)') // text in blue
      .should('have.css', 'font-size', '48px')
      .should('have.css', 'font-family', 'Raleway, sans-serif');

    // verify Deloitte Digital tile
    cy.get('img.project-image').eq(0).should('have.attr', 'src').and('include', 'DDlogo.jpg');
    cy.get('.project-title').should('have.css', 'font-family', 'Poppins, sans-serif') // verify project font
    cy.contains('Deloitte Digital');
    cy.get('a.project-tile').eq(0).should('have.attr', 'href').and('equals', 'pages/deloitte.html');

    // verify Amazon tile
    cy.get('img.project-image').eq(1).should('have.attr', 'src').and('include', 'KindleLogo.png');
    cy.contains('Amazon');
    cy.get('a.project-tile').eq(1).should('have.attr', 'href').and('equals', 'pages/amazon.html');

    // verify Microsoft tile
    cy.get('img.project-image').eq(2).should('have.attr', 'src').and('include', 'OfficeForMac2011.jpg');
    cy.contains('Microsoft');
    cy.get('a.project-tile').eq(2).should('have.attr', 'href').and('equals', 'pages/microsoft.html');
  })
})

describe('Verify Contact section', () => {
  it('verify the contact section text', () => {
    cy.visit('http://127.0.0.1:5500/index.html');

    // get content within Contact section iframe
    cy.switchToIframe('#contactSection').contains('Let\'s work together...'); // header
    cy.switchToIframe('#contactSection')
      .should('have.css', 'color', 'rgb(255, 255, 255)');
    cy.switchToIframe('#contactSection').within(() => {
      cy.get('h2#contact-intro-phrase')
        .should('have.css', 'font-size', '48px')
        .should('have.css', 'font-family', 'Raleway, sans-serif');
    })
    cy.switchToIframe('#contactSection').within(() => {
      cy.get('p#contact-intro-subphrase')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Poppins, sans-serif');
    })
    cy.switchToIframe('#contactSection').contains('If you have any questions, feedback, or a job opportunity, please contact me.');
    
    cy.switchToIframe('#contactSection').within(() => {
      cy.get('img.project-image').should('have.attr', 'src').and('include', 'ooricContactPic.jpg');
    })
    cy.switchToIframe('#contactSection').contains('Contact Eric');
  })
})

describe('Verify Footer section', () => {
  it('verify the footer section text', () => {
    cy.visit('http://127.0.0.1:5500/index.html');

    // get content within Footer section iframe
    cy.switchToIframe('#footerSection').contains('© 2024, Made with ♥ by Eric Waldbaum');
    cy.switchToIframe('#footerSection').within(() => {
      cy.get('#foot')
        .should('have.css', 'color', 'rgb(255, 255, 255)') // text in white
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Poppins, sans-serif');
      cy.get('#fot').should('have.css', 'color', 'rgb(255, 159, 92)'); // name text in orange
    })
  })
})