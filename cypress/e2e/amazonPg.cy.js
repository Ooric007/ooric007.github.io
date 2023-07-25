describe('Verify Amazon page', () => {
  beforeEach(() => {
    cy.navigateToAmazonPg();
  });

  it('Verify the Header section text', () => {
    // get content within Header section iframe
    cy.get('#ooricLogo').should('have.attr', 'src').and('include', 'ooricLogo.png');
    cy.get('ul li a').eq(0).should('have.attr', 'href').and('include', '');  

    cy.contains('Home');
    cy.get('ul li a').eq(0).should('not.have.class', 'active');
    cy.contains('About');
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
    cy.get('ul li a').eq(4).should('have.class', 'active'); // Verify Amazon is active
    cy.contains('Microsoft');
    cy.get('ul li a').eq(5).should('have.attr', 'href').and('include', 'microsoft.html');
    cy.get('ul li a').eq(5).should('not.have.class', 'active');

    cy.contains('Contact Eric');
    cy.get('ul li a').eq(6).should('have.attr', 'href').and('include', 'contact.html');
    cy.get('ul li a').eq(6).should('not.have.class', 'active');
  })

  it('Verify the Amazon Greeting text header', () => {
    cy.get('.about-work h3').contains('WORK');

    cy.get('h3')
    .should('have.css', 'font-size', '16px')
    .should('have.css', 'font-family', 'Nunito, sans-serif')
    .should('have.css', 'color', 'rgb(74, 74, 67)'); // #4A4A43
  })

  it('Verify the Amazon Greeting text', () => {
    cy.get('.about-work h1').eq(0).contains('Amazon');

    cy.get('h1#greetingId')
    .should('have.css', 'font-size', '72px')
    .should('have.css', 'font-family', 'Raleway, sans-serif');

    cy.get('.about-work p').contains('Conducted testing on the touch-optimized Kindle Store across Kindle Fire, Motorola Xoom, and Apple iPad, playing a crucial role in revolutionizing the purchasing experience for readers. I became familiar with how to test on touch-based devices, learned about session-based charter testing, and Fire OS.');

    cy.get('.paragraphs p')
      .should('have.css', 'font-size', '16px')
      .should('have.css', 'font-family', 'Poppins, sans-serif')
      .should('have.css', 'color', 'rgb(74, 74, 67)'); // #4A4A43
  })

  it('Verify the Clients section', () => {
    cy.get('.clients-section h3').contains('TESTED');
    
    // verify images
    cy.get('img[alt="Kindle logo"]').should('have.attr', 'src').and('include', 'kindlelogo-mv0xjJg01EHny9yr.png');
    cy.get('#kindleStoreLink').should('have.attr', 'href').and('equals', 'https://www.amazon.com/Kindle-Store/b?ie=UTF8&node=133140011');
  })

  it('Verify the Accolades section', () => {
    cy.get('.accolades-section h3').contains('ACCOLADES');

    cy.get('.accolades-section q').contains('Eric was a fantastic resource to our team during his time at Amazon. His attention to detail and willingness to jump into new tasks and learn new things helped us maintain our team\'s very high quality bar.');
    cy.get('.accolades-section p').contains('– Dan C., QA Engineer (current Lead Automation Engineer at Hulu)');
  })

  it('Verify the Other Work History section', () => {
    cy.contains('Other work history');
    cy.get('.projects-section-header')
      .should('have.css', 'color', 'rgb(33, 150, 243)') // text in blue
      .should('have.css', 'font-size', '48px')
      .should('have.css', 'font-family', 'Raleway, sans-serif');

    // verify Deloitte Digital tile
    cy.get('img.project-image').eq(0).should('have.attr', 'src').and('include', 'ddlogo-ALpXJP39BDtG9J5o.jpg');
    cy.get('.project-title').should('have.css', 'font-family', 'Poppins, sans-serif') // verify project font
    cy.contains('Deloitte Digital');
    cy.get('#projects a').eq(0).should('have.attr', 'href').and('equals', 'deloitte.html');

    // verify Microsoft tile
    cy.get('img.project-image').eq(1).should('have.attr', 'src').and('include', 'officeformac2011-m7VEpb6OPXF5P1kE.jpg');
    cy.contains('Microsoft');
    cy.get('#projects a').eq(1).should('have.attr', 'href').and('equals', 'microsoft.html');
  })

  it('Verify the Contact section text', () => {
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
      cy.get('img.project-image').should('have.attr', 'src').and('include', '_mg_2037-Y4LE4vwGMPUonDj7.jpg');
    })
    cy.switchToIframe('#contactSection').contains('Contact Eric');
  })

  it('Verify the Footer section text', () => {
    // get content within Footer section iframe
    cy.switchToIframe('#footerSection').contains('© 2023, Made with ♥ by Eric Waldbaum');
    cy.switchToIframe('#footerSection').within(() => {
      cy.get('#foot')
        .should('have.css', 'color', 'rgb(255, 255, 255)') // text in white
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Poppins, sans-serif');
      cy.get('#fot').should('have.css', 'color', 'rgb(255, 159, 92)'); // name text in orange
    })
  })
})