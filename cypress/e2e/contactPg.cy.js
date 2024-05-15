describe('Verify Contact page', () => {
  beforeEach(() => {
    cy.navigateToContactPg();
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
    cy.get('ul li a').eq(5).should('not.have.class', 'active');

    cy.contains('Contact Eric');
    cy.get('ul li a').eq(6).should('have.attr', 'href').and('include', 'contact.html');
    cy.get('ul li a').eq(6).should('have.class', 'active'); // Verify Contact Eric is active
  })

  it('Verify the Contact Greeting text header', () => {
    cy.get('.title-container h3').contains('CONTACT');

    cy.get('.title-container h3')
    .should('have.css', 'font-size', '16px')
    .should('have.css', 'font-family', 'Nunito, sans-serif')
    .should('have.css', 'color', 'rgb(74, 74, 67)'); // #4A4A43
  })

  it('Verify the Contact Greeting text', () => {
    cy.get('.contact-info-section h1').eq(0).contains('Get in touch today');

    cy.get('h1#greetingId')
    .should('have.css', 'font-size', '72px')
    .should('have.css', 'font-family', 'Raleway, sans-serif');

    cy.get('.tile-container h3').eq(0).contains('My Location & Time');
    cy.get('.tile-container p').eq(0).contains('Bellevue, WA, USA');

    // Calculate time and round down to the nearest minute
    // TO DO: Investigate async issue that can happen with seconds verification
    const currentTime = new Date();
    currentTime.setSeconds(0);
    const formattedTime = currentTime.toLocaleTimeString('en-US', {
      hour12: true,
      hour: 'numeric',
      minute: '2-digit',
    });

    cy.log(`Current PST Time: ${formattedTime}`);

    // Add a buffer of 2 seconds
    const timeBufferInSeconds = 2;
    const timeBufferInMilliseconds = timeBufferInSeconds * 1000;

    // Get the time without the seconds
    const timeWithoutSeconds = formattedTime.slice(0, -3);

    cy.get('#pst-time').should($element => {
      const elementText = $element.text();
      expect(elementText).to.include(timeWithoutSeconds);
  }, { timeout: 10000 + timeBufferInMilliseconds });
  
    cy.get('.tile-container h3').eq(1).contains('My Email');
    cy.get('.tile-container p').eq(2).contains('ooric@outlook.com');
    cy.get('.tile-container a').eq(0).should('have.attr', 'href').and('equals', 'mailto:ooric@outlook.com?subject=Ooric.com%20Message');

    cy.get('.tile-container h3').eq(2).contains('My LinkedIn');
    cy.get('#linkedin-icon').should('exist');
    cy.get('.tile-container p').eq(3).contains('https://www.linkedin.com/in/eric-waldbaum/');
    cy.get('.tile-container a').eq(1).should('have.attr', 'href').and('equals', 'https://www.linkedin.com/in/eric-waldbaum/');

    cy.get('iframe.googleMap').eq(0).should('have.attr', 'src').and('include', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43047.39214431262!2d-122.19233079229791!3d47.59770545331718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906bcfa3a66041%3A0xbacf5482ead00765!2sBellevue%2C%20WA!5e0!3m2!1sen!2sus!4v1687295456564!5m2!1sen!2sus');

    cy.get('.tile-container p')
      .should('have.css', 'font-size', '16px')
      .should('have.css', 'font-family', 'Poppins, sans-serif')
      .should('have.css', 'color', 'rgb(74, 74, 67)'); // #4A4A43

    cy.get('.tile-container h3')
      .should('have.css', 'font-size', '24px')
      .should('have.css', 'font-family', 'Nunito, sans-serif')
      .should('have.css', 'color', 'rgb(74, 74, 67)'); // #4A4A43
  })

  it('Verify the Contact Form section', () => {
    cy.contains('Contact form');
    cy.get('.contact-form-section h2')
      .should('have.css', 'color', 'rgb(33, 150, 243)') // text in blue
      .should('have.css', 'font-size', '48px')
      .should('have.css', 'font-family', 'Raleway, sans-serif');

    // verify form
    cy.get('label[for="name"]').should('have.text', 'Name*');
    cy.get('#name').then(($input) => {
      expect($input).to.have.attr('maxlength', '100');
      expect($input).to.have.attr('required');
      expect($input).to.have.attr('placeholder', 'Your name');
    });

    cy.get('label[for="email"]').should('have.text', 'Email address*');
    cy.get('#email').then(($input) => {
      expect($input).to.have.attr('maxlength', '254');
      expect($input).to.have.attr('required');
      expect($input).to.have.attr('placeholder', 'Your email address');
    });

    cy.get('label[for="phone"]').should('have.text', 'Phone number');
    cy.get('#phone').then(($input) => {
      expect($input).to.have.attr('maxlength', '14');
      expect($input).to.not.have.attr('required');
      expect($input).to.have.attr('placeholder', '(###) ###-####');
    });

    cy.get('label[for="subject"]').should('have.text', 'Subject*');
    cy.get('#subject').then(($input) => {
      expect($input).to.have.attr('maxlength', '100');
      expect($input).to.have.attr('required');
      expect($input).to.have.attr('placeholder', 'Subject');
    });

    cy.get('label[for="message"]').should('have.text', 'Message*');
    cy.get('#message').then(($input) => {
      expect($input).to.have.attr('maxlength', '500');
      expect($input).to.have.attr('required');
      expect($input).to.have.attr('placeholder', 'Enter your message');
    });

    cy.get('#message-character-count').contains('0 / 500');

    cy.get('button').contains('Submit');
    cy.get('button').should('have.css', 'background-color', 'rgb(0, 123, 255)'); // verify blue background color
  })

  it('Verify error messages in Contact Form section', () => {
    // get focus to each field and submit to verify required error messages are showing
    cy.get('#name').focus();
    cy.get('#email').focus();
    cy.get('#name-error')
      .should('have.text', 'Please enter your name.')
      .should('have.css', 'color', 'rgb(255, 0, 0)');
    cy.get('#phone').focus();
    cy.get('#email-error')
      .should('have.text', 'Please enter a valid email address.')
      .should('have.css', 'color', 'rgb(255, 0, 0)');
    cy.get('#subject').focus();
    cy.get('#message').focus();
    cy.get('#subject-error')
      .should('have.text', 'Please enter your subject.')
      .should('have.css', 'color', 'rgb(255, 0, 0)');
    cy.get('button').click();
    cy.get('#message-error')
      .should('have.text', 'Please enter your message.')
      .should('have.css', 'color', 'rgb(255, 0, 0)');
    cy.get('#phone-error').should('not.be.visible'); // phone number is optional so no error for blank value

    // enter invalid phone number
    cy.get('#phone').type('Ab123', { force: true });
    cy.get('#phone').should('have.value', '(23');

    cy.get('button').click();
    cy.get('#phone-error')
      .should('have.text', 'Please enter a valid phone number as (###) ###-#### or enter it in your message.')
      .should('have.css', 'color', 'rgb(255, 0, 0)');

    // enter invalid email address
    cy.get('#email').type('@@', { force: true });
    cy.get('button').click();
    cy.get('#email-error').should('be.visible'); // still has invalid email address so error should remain

    // Enter valid values and confirm error messages go away
    cy.get('#email').clear({ force: true });
    cy.get('#email').type('a@b.co', { force: true });
    cy.get('#name').focus();
    cy.get('#email-error').should('not.be.visible'); // email address error is gone now that it has a valid format

    cy.get('#name').type('A', { force: true });
    cy.get('#phone').focus();
    cy.get('#name-error').should('not.be.visible'); // name error is gone now that it has a valid format
  
    cy.get('#phone').clear({ force: true });
    cy.get('#phone').type('42512222222222222', { force: true });
    cy.get('#phone').should('have.value', '(425) 222-2222'); // should be valid with ignored invalid characters

    cy.get('#phone').clear({ force: true });
    cy.get('#phone').type('04250333333333333333', { force: true });
    cy.get('#phone').should('have.value', '(425) 333-3333'); // should be valid with ignored invalid characters

    cy.get('#subject').focus();
    cy.get('#phone-error').should('not.be.visible'); // phone error is gone now that it has a valid format

    cy.get('#subject').type('My Subject :)', { force: true });
    cy.get('#message').focus();
    cy.get('#subject-error').should('not.be.visible'); // subject error is gone now that it has a valid format

    cy.get('#message').type('Testing...', { force: true });
    cy.get('#message-character-count').contains('10 / 500');
    cy.get('#message').type(' 123', { force: true });
    cy.get('#message-character-count').contains('14 / 500');
    cy.get('#message').type('Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document. To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries.', { force: true });
    cy.get('#message').should('have.value', 'Testing... 123Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document. To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the ');
    cy.get('#message-character-count').contains('500 / 500');
    cy.get('#message').clear({ force: true });
    cy.get('#message-character-count').contains('0 / 500');
    cy.get('#message').type('1');
    cy.get('#message-character-count').contains('1 / 500');
    cy.get('button').focus();
    cy.get('#message-error').should('not.be.visible'); // message error is gone now that it has a valid format
  })

  // TO DO: Verify email application integration

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