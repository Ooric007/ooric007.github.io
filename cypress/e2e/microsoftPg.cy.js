describe('Verify Deloitte Digital page', () => {
  beforeEach(() => {
    cy.navigateToMicrosoftPg();
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
    cy.get('ul li a').eq(4).should('not.have.class', 'active');
    cy.contains('Microsoft');
    cy.get('ul li a').eq(5).should('have.attr', 'href').and('include', 'microsoft.html');
    cy.get('ul li a').eq(5).should('have.class', 'active'); // Verify Microsoft is active

    cy.contains('Contact Eric');
    cy.get('ul li a').eq(6).should('have.attr', 'href').and('include', 'contact.html');
    cy.get('ul li a').eq(6).should('not.have.class', 'active');
  })

  it('Verify the DD Greeting text header', () => {
    cy.get('.about-work h3').contains('WORK');

    cy.get('h3')
    .should('have.css', 'font-size', '16px')
    .should('have.css', 'font-family', 'Nunito, sans-serif')
    .should('have.css', 'color', 'rgb(74, 74, 67)'); // #4A4A43
  })

  it('Verify the DD Greeting text', () => {
    cy.get('.about-work h1').eq(0).contains('Microsoft');

    cy.get('h1#greetingId')
    .should('have.css', 'font-size', '72px')
    .should('have.css', 'font-family', 'Raleway, sans-serif');

    cy.get('.about-work p').eq(0).contains('Played a vital role in generating billions of dollars in revenue for Office for Mac through my significant contributions. Tested 3-D effects and other graphic areas for Office for Mac 2008, collaborated globally on testing charts and the chart ribbon for Office for Mac 2011, and ensured high-quality standards by testing Cocoa undo/redo menus, dialogs, status bars, OOUI, and ColorPickers for Office for Mac 2016. These efforts resulted in new and improved UI features, significant improvements in discoverability and enhanced performance (e.g., complex chart load time from over 30 seconds to under 2 seconds). Additionally, I provided effective automation and led Mac OS integration test work at Microsoft.');

    cy.get('.about-work p').eq(1).contains('Contracting (through Volt):');
    cy.get('#ms-paragraph #microsoft-li').eq(0).contains('Tested display, images, editing, and globalization areas for Internet Explorer');
    cy.get('#ms-paragraph #microsoft-li').eq(1).contains('Verified security and memory leak bugs were fixed and triaged customer bugs');

    cy.get('.paragraphs p')
      .should('have.css', 'font-size', '16px')
      .should('have.css', 'font-family', 'Poppins, sans-serif')
      .should('have.css', 'color', 'rgb(74, 74, 67)'); // #4A4A43
  })

  it('Verify the Tested section', () => {
    cy.get('.clients-section h3').contains('TESTED');
    
    // verify images
    cy.get('img[alt="Office for Mac 2016 logo"]').should('have.attr', 'src').and('include', 'OfficeForMac2016.jpg');

    cy.get('img[alt="Office for Mac 2011 logo"]').should('have.attr', 'src').and('include', 'OfficeForMac2011.jpg');
    cy.get('#MacOffice2011-link').should('have.attr', 'href').and('equals', 'https://youtu.be/FGLye1dn6dg');
 
    cy.get('img[alt="Office for Mac 2008 logo"]').should('have.attr', 'src').and('include', 'OfficeForMac2008.png');
    cy.get('img[alt="Windows Live Spaces logo"]').should('have.attr', 'src').and('include', 'WindowsLiveSpacesLogo.jpeg');
    cy.get('img[alt="Windows Vista logo"]').should('have.attr', 'src').and('include', 'VistaLogo.jpeg');

    cy.get('img[alt="Internet Explorer 7 logo"]').should('have.attr', 'src').and('include', 'ie7logo.jpeg');
  })

  it('Verify the Accolades section', () => {
    cy.get('.accolades-section h3').contains('ACCOLADES');
    cy.get('.accolades-section p').eq(0).contains('🏆 Gold Star award comment:');

    cy.get('.accolades-section q').eq(0).contains('The Chart Main Ribbon Tab is the centerpiece of the new Charting workflow in (Office 2011). Insert or change Chart type, edit your source data, and set quick layouts & styles to finish the look, in a left-to-right step-by-step sequence to bring data to life.');
    cy.get('.accolades-section p').eq(1).contains('– Eric W., MacBU General Manager (current Head of Engineering at HP)');

    cy.get('.accolades-section q').eq(1).contains('I worked with Eric for about four years in the Mac Business Unit at Microsoft. Eric turned out to be the best test engineer/SDET/QA ever throughout my 16 years of software development career. He is bright with high energy. Eric is detail-oriented and very systematic when testing software. Eric finds all kinds of bugs, regardless of their depth. He is also very good at automating tests. Eric is a customer/end-user advocate always thinking from a user\'s viewpoint, without whom I couldn\'t have delivered my features so very user-friendly and intuitive. Eric is also very cooperative and encouraging, very easy to work with as a team member. In fact, Eric and I were in a feature crew team for about a year. As a team, Eric and I worked closely together, bouncing and trying ideas, finishing series of features in top-notch quality in a really short period of time. I really hope to work with Eric again in the future. With Eric by the side, you will never worry about poor quality!');
    cy.get('.accolades-section p').eq(2).contains('– Cheeching (Henry) Y., SDE (current SDE II at Microsoft)');
  })

  it('Verify the Other Work History section', () => {
    cy.contains('Other work history');
    cy.get('.projects-section-header')
      .should('have.css', 'color', 'rgb(33, 150, 243)') // text in blue
      .should('have.css', 'font-size', '48px')
      .should('have.css', 'font-family', 'Raleway, sans-serif');

    // verify Deloitte Digital tile
    cy.get('img.project-image').eq(0).should('have.attr', 'src').and('include', 'DDlogo.jpg');
    cy.get('.project-title').should('have.css', 'font-family', 'Poppins, sans-serif') // verify project font
    cy.contains('Deloitte Digital');
    cy.get('#projects a').eq(0).should('have.attr', 'href').and('equals', 'deloitte.html');

    // verify Amazon tile
    cy.get('img.project-image').eq(1).should('have.attr', 'src').and('include', 'KindleLogo.png');
    cy.contains('Amazon');
    cy.get('a.project').eq(1).should('have.attr', 'href').and('equals', 'amazon.html');
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
      cy.get('img.project-image').should('have.attr', 'src').and('include', 'ooricContactPic.jpg');
    })
    cy.switchToIframe('#contactSection').contains('Contact Eric');
  })

  it('Verify the Footer section text', () => {
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