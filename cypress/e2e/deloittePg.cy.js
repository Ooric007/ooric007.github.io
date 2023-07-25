describe('Verify Deloitte Digital page', () => {
  beforeEach(() => {
    cy.navigateToDeloittePg();
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
    cy.get('ul li a').eq(3).should('have.class', 'active'); // Verify Deloitte Digital is active
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

  it('Verify the DD Greeting text header', () => {
    cy.get('.about-work h3').contains('WORK');

    cy.get('h3')
    .should('have.css', 'font-size', '16px')
    .should('have.css', 'font-family', 'Nunito, sans-serif')
    .should('have.css', 'color', 'rgb(74, 74, 67)'); // #4A4A43
  })

  it('Verify the DD Greeting text', () => {
    cy.get('.about-work h1').eq(0).contains('Deloitte Digital');

    cy.get('h1#greetingId')
    .should('have.css', 'font-size', '72px')
    .should('have.css', 'font-family', 'Raleway, sans-serif');

    cy.get('.about-work p').contains('At Deloitte/Übermind Studios, I made significant contributions to numerous high-revenue projects for renowned companies. My work primarily involved testing responsive websites across 20+ devices, as well as testing popular iOS and Android mobile/TV apps. As a leader, I led bug bashes, oversaw QA processes, mentored peers, and conducted QA and ticket triage meetings. As a scrum master, I ensured efficient project management and fostered collaboration among the team. I continuously expanded my automation skills using C#, JavaScript (Cypress), Python, Postman, and Ruby (Calabash) to automate various processes, significantly improving efficiency and quality. Additionally, I demonstrated versatility by creating chatbots, developing Figma prototypes, and completing salesforce.com admin training.');

    cy.get('.paragraphs p')
      .should('have.css', 'font-size', '16px')
      .should('have.css', 'font-family', 'Poppins, sans-serif')
      .should('have.css', 'color', 'rgb(74, 74, 67)'); // #4A4A43
  })

  it('Verify the Clients section', () => {
    cy.get('.clients-section h3').contains('CLIENTS');
    
    cy.get('#client-projects p').eq(0).contains('My most recent role was a Test Lead on international Scrum teams for a top retail company where I played a pivotal role in the success of the project. I architected Azure test cases and implemented C# automation using NuGet and Postman for APIs, Selenium for Web UI, and Swift for Apple devices. Additionally, I contributed to the growth of the teams, fostering a culture of success through agile methodologies and cross-team collaboration.');
    cy.get('#client-projects p').eq(1).contains('As the Test Lead for a responsive React website of a VR company, I played a crucial role in ensuring the quality and success of the project. The website introduced various new features including the Omniverse, custom Xola booking, MailChimp, Twilio, Mandrill, Ironclad PactSafe, and API service integrations, as well as SEO enhancements. In addition to my testing responsibilities, I took the lead in managing the copy effort by coding strings in multiple languages and collaborating closely with the client, copy editor, and the rest of the team. I also facilitated a daily triage call with the client, implemented Python and service automation to streamline processes, and developed an IBM Watson chatbot as a possible new feature.');
    cy.get('#client-projects p').eq(2).contains('My longest project was testing the Showtime Anytime® and Showtime® apps for Android, Kindle Fire, Chromecast, Android TV, Fire Stick/TV, Tizen/WebOS TVs, iPhone, iPad, and Roku. Frequently used Charles Proxy, Postman, architected test suite and session-based charter tests, added automation, and led testing efforts while acting as a scrum master. Maintenance updates included Downloads, Live TV, analytics, device management, PPV, in-app purchasing, Android and iOS optimization.');

    cy.get('#client-projects p')
    .should('have.css', 'font-size', '16px')
    .should('have.css', 'font-family', 'Poppins, sans-serif')
    .should('have.css', 'color', 'rgb(74, 74, 67)'); // #4A4A43

    // verify images
    cy.get('img[alt="Costco logo"]').should('have.attr', 'src').and('include', 'costcologo-AwvLrb8bQKtD1aOR.png');
    cy.get('#costcoLink').should('have.attr', 'href').and('equals', 'https://www.costco.com/join-costco.html');

    cy.get('img[alt="The VOID logo"]').should('have.attr', 'src').and('include', 'thevoid-Yyvko4DD83S6x4pg.png');
    cy.get('#theVOIDlink').should('have.attr', 'href').and('equals', 'https://web.archive.org/web/20191218041742/https://www.thevoid.com/');
 
    cy.get('img[alt="Showtime logo"]').should('have.attr', 'src').and('include', 'showtimelogo-AoPEeb44XgskK3jk.png');
    cy.get('#SHOanytimeLink').should('have.attr', 'href').and('equals', 'https://apps.apple.com/us/app/showtime-anytime/id484232467');

    cy.get('img[alt="Lululemon logo"]').should('have.attr', 'src').and('include', 'lululemonlogo-mP4XpW33V7IeW7OR.png');
    cy.get('#lululemonLink').should('have.attr', 'href').and('equals', 'https://www.lululemon.com/');

    cy.get('img[alt="HP logo"]').should('have.attr', 'src').and('include', 'hplogo-m2Wb49qqR2iEQ8bv.png');
    cy.get('#hpSupportLink').should('have.attr', 'href').and('equals', 'https://support.hp.com/');

    cy.get('img[alt="Rent-A-Center logo"]').should('have.attr', 'src').and('include', 'raclogo-Y4LE49PP13cGJl8l.jpeg');
    cy.get('#rentACenterLink').should('have.attr', 'href').and('equals', 'https://www.rentacenter.com/');

    cy.get('img[alt="SuperCuts logo"]').should('have.attr', 'src').and('include', 'supercutslogo-Yyvko4DDRpc3J2Jp.png');
    cy.get('#superCutsLink').should('have.attr', 'href').and('equals', 'https://apps.apple.com/us/app/supercuts-hair-salon-check-in/id529129647');

    cy.get('img[alt="Commonwealth of Pennsylvania CareerLink logo"]').should('have.attr', 'src').and('include', 'pajobgateway-mxBxrb22POseG9RP.png');
    cy.get('#jobGatewayLink').should('have.attr', 'href').and('equals', 'https://web.archive.org/web/20161124013605/https://www.jobgateway.pa.gov/jponline/Admin/Common/Portal.aspx');

    cy.get('img[alt="Deloitte Digital logo"]').should('have.attr', 'src').and('include', 'DDlogo.png');
    cy.get('#ddLink').should('have.attr', 'href').and('equals', 'https://web.archive.org/web/20141006164150/http://www.deloittedigital.com/us');

    cy.get('img[alt="truTV logo"]').should('have.attr', 'src').and('include', 'trutvlogo-Yan2BQ00Ryi1e4Wq.png');
    cy.get('#truTVlink').should('have.attr', 'href').and('equals', 'https://apps.apple.com/us/app/trutv/id396972659');
  })

  it('Verify the Accolades section', () => {
    cy.get('.accolades-section h3').contains('ACCOLADES');
    cy.get('.accolades-section p').eq(0).contains('🏆 Received over 5 Deloitte Applause Awards from leadership for exceptional work, 2022 and prior years');
    cy.get('.accolades-section p').eq(1).contains('🏆 ADDY and W3 Gold Winner for work on Deloitte Digital responsive website, 2013');
    cy.get('.accolades-section p').eq(2).contains('🏆 Completed salesforce.com admin training');

    cy.get('.accolades-section q').eq(0).contains('You are hands down the best QA I\'ve worked with');
    cy.get('.accolades-section p').eq(3).contains('– Tina Y., Product Owner, Costco Wholesale');

    cy.get('.accolades-section q').eq(1).contains('Wow, just wow! [with two thumbs up after showing client demo]');
    cy.get('.accolades-section p').eq(4).contains('– Guislain L., Solution Architect, Costco Wholesale');

    cy.get('.accolades-section q').eq(2).contains('You are an expert with everything! Thank you so much for helping me learn so much.');
    cy.get('.accolades-section p').eq(5).contains('– Vianney L., Quality Engineer (current Automation Quality Engineer at GFT)');

    cy.get('.accolades-section q').eq(3).contains('Eric is the most diligent QA I\'ve ever worked with. You\'re in good hands [with him]');
    cy.get('.accolades-section p').eq(6).contains('– Ashley P., Associate Creative Director (current UX Director at Celerity)');

    cy.get('.accolades-section q').eq(4).contains('I want it to be known, and will shout it from the uppermost rafters, that Eric Waldbaum has been a prominent leader on the project from Day 1. His level of ownership over the product, his attention to the most minute of detail, his rigor and standard, have made a HUGE impact on the quality of work we’ve delivered. I don’t often get a dedicated QA on my projects, but when I do, his name is the one I request. I remembered his work from HP back in the Fremont days, and his work on The VOID is stellar.');
    cy.get('.accolades-section p').eq(7).contains('– Brian E., Front-end Design/Dev 🦄 (current Design Systems Manager, UX Engineer 🦄 at Cisco)');

    cy.get('.accolades-section q').eq(5).contains('Eric is one of the most detailed oriented and engaged Quality Assurance professionals I have ever worked with! He is very passionate about ensuring a great experience is delivered to the customer.');
    cy.get('.accolades-section p').eq(8).contains('– Marc E., iOS Architect (current Sr. Software Engineer at Chewy)');
  })

  it('Verify the Other Work History section', () => {
    cy.contains('Other work history');
    cy.get('.projects-section-header')
      .should('have.css', 'color', 'rgb(33, 150, 243)') // text in blue
      .should('have.css', 'font-size', '48px')
      .should('have.css', 'font-family', 'Raleway, sans-serif');

    // verify Amazon tile
    cy.get('img.project-image').eq(0).should('have.attr', 'src').and('include', 'kindlelogo-mv0xjJg01EHny9yr.png');
    cy.contains('Amazon');
    cy.get('a.project').eq(0).should('have.attr', 'href').and('equals', 'amazon.html');

    // verify Microsoft tile
    cy.get('img.project-image').eq(1).should('have.attr', 'src').and('include', 'officeformac2011-m7VEpb6OPXF5P1kE.jpg');
    cy.contains('Microsoft');
    cy.get('a.project').eq(1).should('have.attr', 'href').and('equals', 'microsoft.html');
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