describe('Verify Roles page', () => {
  beforeEach(() => {
    cy.navigateToAboutPg();
  });

  it('Verify the Header section text', () => {
    // get content within Header section iframe
    cy.get('#ooricLogo').should('have.attr', 'src').and('include', 'ooricLogo.png');
    cy.get('ul li a').eq(0).should('have.attr', 'href').and('include', '');  

    cy.contains('Home');
    cy.get('ul li a').eq(0).should('not.have.class', 'active');
    cy.contains('About');
    cy.get('ul li a').eq(1).should('have.class', 'active'); // Verify About is active

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

  it('Verify the Greeting text header', () => {
    cy.get('.about h3').contains('ABOUT ERIC');
    cy.get('h3')
    .should('have.css', 'font-size', '16px')
    .should('have.css', 'font-family', 'Nunito, sans-serif')
    .should('have.css', 'color', 'rgb(74, 74, 67)'); // #4A4A43
  })

  it('Verify the Greeting text', () => {
    cy.get('.about h1').eq(0).contains('Embark on my tech exploration');

    cy.get('h1#greetingId')
    .should('have.css', 'font-size', '72px')
    .should('have.css', 'font-family', 'Raleway, sans-serif');

    cy.get('.paragraphs h2').eq(0).contains('Early Technology Enthusiast:');
    cy.get('.paragraphs h2').eq(1).contains('Academic Technology Journey:');
    cy.get('.paragraphs h2').eq(2).contains('Professional Technology Experience:');

    cy.get('.paragraphs p').eq(0).contains('My fascination with technology ignited during my formative years when I was fortunate to engage with iconic devices such as the Atari 2600, Nintendo, and Macintosh Plus. These early encounters with platform software like Pong, Mario, Zelda, MacPaint, and HyperCard not only fostered a deep appreciation for technology, but also laid the foundation for my enduring passion in this field.');
    cy.get('.paragraphs p').eq(1).contains('In high school (early days of WWW) I joined Technology Club and created websites as a webmaster such as my class website. At Western Washington University, I majored in Management Information Systems (business and computers) and minored in Computer Science (Website Management & Design) and Mathematics. While there, I founded the Western Mac User Group with my roommate and created/maintained multiple websites. Later I completed education trainings, got a C# for Testers certificate at Bellevue College, and UX and Visual Interface Design certificate at University of Washington.');
    cy.get('.paragraphs p').eq(2).contains('After college I was a Database Support Analyst for a real estate company and a top-selling iPod/Mac Specialist at an Apple Store. I happened to get a contract job at Microsoft as a Software Test Engineer I and have enjoyed software testing with different companies for about 20 years.')

    cy.get('.paragraphs h2')
    .should('have.css', 'font-size', '36px')
    .should('have.css', 'font-family', '"Libre Caslon Display", serif')
    .should('have.css', 'color', 'rgb(74, 74, 67)'); // #4A4A43

    cy.get('.paragraphs p')
      .should('have.css', 'font-size', '16px')
      .should('have.css', 'font-family', 'Poppins, sans-serif')
      .should('have.css', 'color', 'rgb(74, 74, 67)'); // #4A4A43
  })

  it('Verify the Links section', () => {
    cy.get('.links h3').contains('LINKS');
    cy.get('.links h1').contains('Favorite links');

    cy.get('.links h2').eq(0).contains('Apple');
    cy.get('.links p').eq(0).contains('As an Apple fan it\'s fun to see the latest technology they produce. My name was once showcased on this site as a winner of an iTunes contest.');

    cy.get('.links h2').eq(1).contains('MacRumors');
    cy.get('.links p').eq(1).contains('To learn about current and possible future Apple news I check out this site, appleinsider.com, and cultofmac.com.');

    cy.get('.links h2').eq(2).contains('LinkedIn');
    cy.get('.links p').eq(2).contains('I follow industry-leading software testers here for tips and tricks. Also, this is a great place to connect with other professionals and seek employment.');

    cy.get('.links h2').eq(3).contains('My Yahoo!');
    cy.get('.links p').eq(3).contains('I call this site an oldie, but goodie. It\'s great because it\'s a customizable page including news, stocks, fantasy sports, and email.');

    // verify image
    cy.get('i').should('have.attr', 'class').and('include', 'fa-link');
  })

  it('Verify the Education section', () => {
    cy.get('.education-section h3').eq(0).contains('EDUCATION');
    cy.get('.education-section h1').contains('Continuously learning');

    // verify image
    cy.get('img[alt="Drawing of Eric at work"]').should('have.attr', 'src').and('include', 'ooricCharacture.png');

    cy.get('.education-section h2').eq(0).contains('Education');
    cy.get('.education-section h2').eq(1).contains('Work');

    cy.get('.education-section .text-row h3').eq(0).contains('University of Washington');
    cy.get('.education-section .text-row p').eq(0).contains('Graduate Certificate in User Experience and Visual Interface Design');
    cy.get('.education-section .text-row p').eq(1).contains('2021-2022');

    cy.get('.education-section .text-row h3').eq(1).contains('Bellevue College');
    cy.get('.education-section .text-row p').eq(2).contains('Graduate Certificate in C# for Testing');
    cy.get('.education-section .text-row p').eq(3).contains('2011');

    cy.get('.education-section .text-row h3').eq(2).contains('Western Washington University');
    cy.get('.education-section .text-row p').eq(4).contains('Bachelor\'s degree in Management Information Systems');
    cy.get('.education-section .text-row p').eq(5).contains('1999-2004');

    cy.get('.education-section .text-row h3').eq(3).contains('Deloitte Digital');
    cy.get('.education-section .text-row p').eq(6).contains('Quality Architect Lead / Sr. Quality Assurance Engineer, Engineering Department');
    cy.get('.education-section .text-row p').eq(7).contains('2012-2023');

    cy.get('.education-section .text-row h3').eq(4).contains('Amazon.com (CoreStaff)');
    cy.get('.education-section .text-row p').eq(8).contains('SDET II, Kindle Cross-Platform Team');
    cy.get('.education-section .text-row p').eq(9).contains('2011-2012');

    cy.get('.education-section .text-row h3').eq(5).contains('Microsoft Corporation');
    cy.get('.education-section .text-row p').eq(10).contains('SDET, Office for Mac Team (aka Mac Business Unit)');
    cy.get('.education-section .text-row p').eq(11).contains('2006-2011');

    cy.get('.education-section .text-row h3').eq(6).contains('Microsoft Corporation (Volt)');
    cy.get('.education-section .text-row p').eq(12).contains('STE I and III');
    cy.get('.education-section .text-row p').eq(13).contains('Live Spaces, Windows Beta, and Internet Explorer Teams');
    cy.get('.education-section .text-row p').eq(14).contains('2005-2006');

    cy.get('.education-section .text-row h3').eq(7).contains('Apple, Inc.');
    cy.get('.education-section .text-row p').eq(15).contains('iPod and Mac Specialist, Retail Team');
    cy.get('.education-section .text-row p').eq(16).contains('2005-2006');

    cy.get('.education-section h2')
    .should('have.css', 'font-size', '36px')
    .should('have.css', 'font-family', 'Raleway, sans-serif')
    .should('have.css', 'color', 'rgb(74, 74, 67)'); // #4A4A43

    cy.get('.education-section .text-row h3')
    .should('have.css', 'font-size', '24px')
    .should('have.css', 'font-family', 'Nunito, sans-serif')
    .should('have.css', 'color', 'rgb(74, 74, 67)'); // #4A4A43

    cy.get('.education-section .text-row p')
    .should('have.css', 'font-size', '16px')
    .should('have.css', 'font-family', 'Poppins, sans-serif')
    .should('have.css', 'color', 'rgb(74, 74, 67)'); // #4A4A43
  })

  it('Verify the Videos section', () => {
    cy.get('.links h3').contains('VIDEOS');
    cy.get('.links h1').contains('Favorite YouTube videos');

    cy.get('#videos h2').eq(0).contains('SOFLES – Limitless');
    cy.get('iframe.youtube-video').eq(0).should('have.attr', 'src').and('include', 'Pv-Do30-P8A');

    cy.get('#videos h2').eq(1).contains('Maker vs Marker 1');
    cy.get('iframe.youtube-video').eq(1).should('have.attr', 'src').and('include', 'N45VYUcYu90'); 

    cy.get('#videos h2').eq(2).contains('Unsung Hero');
    cy.get('iframe.youtube-video').eq(2).should('have.attr', 'src').and('include', 'uaWA2GbcnJU');

    cy.get('#videos h2').eq(3).contains('Take a Seat, Make a Friend');
    cy.get('iframe.youtube-video').eq(3).should('have.attr', 'src').and('include', 'HfHV4-N2LxQ');

    cy.get('#videos h2').eq(4).contains('Mr. W');
    cy.get('iframe.youtube-video').eq(4).should('have.attr', 'src').and('include', '2mTLO2F_ERY');

    cy.get('#videos h2').eq(5).contains('Coca-Cola Small World Machines');
    cy.get('iframe.youtube-video').eq(5).should('have.attr', 'src').and('include', 'ts_4vOUDImE');
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