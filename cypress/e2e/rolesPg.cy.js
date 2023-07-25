describe('Verify Roles page', () => {
  beforeEach(() => {
    cy.navigateToRolesPg();
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
    cy.get('ul li a').eq(2).should('have.class', 'active'); // Verify Roles is active
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

  it('Verify the QE Greeting text header', () => {
    cy.get('#tester h3').contains('ROLES (');
    cy.get('#tester .black').contains('QE'); // selected
    cy.get('#tester a').eq(0).contains('DEV');
    cy.get('#tester a').eq(1).contains('UXD');
    cy.get('#tester a').eq(2).contains('LEAD');

    cy.get('h3')
    .should('have.css', 'font-size', '16px')
    .should('have.css', 'font-family', 'Nunito, sans-serif')
    .should('have.css', 'color', 'rgb(74, 74, 67)'); // #4A4A43
  })

  it('Verify the QE Greeting text', () => {
    cy.get('#tester h1').eq(0).contains('Quality Engineer (QE)');

    cy.get('h1#greetingId')
    .should('have.css', 'font-size', '72px')
    .should('have.css', 'font-family', 'Raleway, sans-serif');

    cy.get('#tester p').eq(0).contains('This role represents my most extensive experience and where my skills truly shine. If project risk is a priority, then this is the position you should be seeking to fill. I consider this role to be \“the glue that holds teams together.\” I bring a unique combination of passion for technology, customer satisfaction, and a natural aptitude for testing.');
    cy.get('#tester p').eq(1).contains('With expertise in various testing roles, such as Quality Assurance Engineer (QAE), Quality Assurance (QA), Software Development Engineer in Test (SDET), and Software Test Engineer (STE), I am well-versed in both manual and automated testing practices. My adaptability to different titles stems from the breadth of my experience and the type of testing work involved.');
    cy.get('#tester p').eq(2).contains('I am seeking a leadership position where I can make significant contributions by delivering a comprehensive test suite, leveraging automation when appropriate, and mitigating project risks effectively.');

    cy.get('.paragraphs p')
      .should('have.css', 'font-size', '16px')
      .should('have.css', 'font-family', 'Poppins, sans-serif')
      .should('have.css', 'color', 'rgb(74, 74, 67)'); // #4A4A43
  })

  it('Verify the Test Methods section', () => {
    cy.get('#test-methods h3').contains('METHODS');
    cy.get('#test-methods h1').contains('My testing');

    // verify image
    cy.get('img[alt="Leaf"]').should('have.attr', 'src').and('include', 'icon-YD0gr4gWJWt5o2qr.svg');
    
    cy.get('.method-tile h2').eq(0).contains('Automation');
    cy.get('.method-tile p').eq(0).contains('I specialize in UI automation on iOS (Swift), Android (Kotlin), Web (JavaScript, Python, C#) and API automation (C#, JavaScript). Tools include Xcode, Android Studio, Visual Studio Code, and Postman.');

    cy.get('.method-tile h2').eq(1).contains('Functional & Error Testing');
    cy.get('.method-tile p').eq(1).contains('I use methods such as ad-hoc, boundary, and root-cause analysis to identify test scenarios and cases. I will have these reviewed with stakeholders, continue to improve and prioritize them.');

    cy.get('.method-tile h2').eq(2).contains('Accessibility (A11y) Testing');
    cy.get('.method-tile p').eq(2).contains('I have a passion for delighting customers of software I test and to help ensure a variety of users can enjoy it I check Vision, Hearing, Motor, and Learning accessibility.');

    cy.get('.method-tile h2').eq(3).contains('Performance Testing');
    cy.get('.method-tile p').eq(3).contains('I am always reviewing software for optimal performance. I look at load balance, KPIs, and stress testing. I\'ve used tools such as Postman, Lighthouse, PSI, and Grafana k6.');

    cy.get('.method-tile h2').eq(4).contains('International Sufficiency Testing');
    cy.get('.method-tile p').eq(4).contains('Hello, hola, שׁלום, こんにちは! I have worked on software that needs to be compatible in multiple languages and across the world. As a result, I know to check for different formatting (e.g., currency and date-time), layout, cultural and language nuances.');

    cy.get('.method-tile h2').eq(5).contains('Mock Data Testing');
    cy.get('.method-tile p').eq(5).contains('Data from a server may not always ready for viewing and it can be valuable to test different characters and lengths. To help test early (shift left approach) mock data can be used during testing.');

    cy.get('.method-tile h2').eq(6).contains('Environment Testing');
    cy.get('.method-tile p').eq(6).contains('Having tested 20+ devices with different operating systems, browsers, and hardware and observing user interaction I understand distinctions important to test (e.g., connectivity, accessory support).');

    cy.get('.method-tile h2').eq(7).contains('Security Testing');
    cy.get('.method-tile p').eq(7).contains('Privacy and data protection are critical to help give customers confidence in the software they are using. I worked with authentication, cookies, encryption, and conducted risk analysis to help protect users.');

    cy.get('.method-tile h2').eq(8).contains('Charter & Equivalence Testing');
    cy.get('.method-tile p').eq(8).contains('While test cases serve as a valuable tool for strategizing and documenting regression suites, I also employ session-based charter testing, or "charters," for focused and exploratory testing. This approach allows for flexibility and adaptability while gaining insights into test time and risk areas. Additionally, I utilize equivalence partitioning to categorize test cases into equivalent classes, effectively reducing the overall number of test cases.');

    cy.get('.method-tile h2').eq(9).contains('Root Cause Analysis (RCA)');
    cy.get('.method-tile p').eq(9).contains('I utilize RCA to identify the root cause of defects by analyzing data and employing problem-solving methods. For example, if a defect stems from a coding error, RCA aims to uncover the underlying cause, such as a lack of code review or inadequate testing processes. Implementing corrective actions based on RCA helps mitigate similar issues in the future.');

    cy.get('.method-tile h2').eq(10).contains('Bug Bashes');
    cy.get('.method-tile p').eq(10).contains('I enjoy organizing and leading bug bashes. These events allow for a variety of people including testers, developers, designers, and stakeholders, to come together to help identify issues. It is time-bound, focused on exploring, and can be fun with food and prizes. After the bash, issues are triaged with the team to help improve software before release.');

    cy.get('.method-tile h2').eq(11).contains('Diagramming & Templates');
    cy.get('.method-tile p').eq(11).contains('To help understand scenarios and catch edge cases I\'ve found it helpful to create diagrams. Also, to help set consistency with tickets, ticket flows, and documentation I enjoy creating templates for the team.');

    cy.get('.method-tile h2')
    .should('have.css', 'font-size', '24px')
    .should('have.css', 'font-family', '"Libre Caslon Display", serif')
    .should('have.css', 'color', 'rgb(74, 74, 67)'); // #4A4A43

    cy.get('.method-tile p')
    .should('have.css', 'font-size', '16px')
    .should('have.css', 'font-family', 'Poppins, sans-serif')
    .should('have.css', 'color', 'rgb(74, 74, 67)'); // #4A4A43
  })

  it('Verify the Developer section', () => {
    cy.get('#developer h3').contains('ROLES (');
    cy.get('#developer a').eq(0).contains('QE'); 
    cy.get('#developer .black').contains('DEV'); // selected
    cy.get('#developer a').eq(1).contains('UXD');
    cy.get('#developer a').eq(2).contains('LEAD');

    cy.get('#developer h1').eq(0).contains('Developer');

    cy.get('#developer p').eq(0).contains('When I hear the term \"Developer\" it often brings to mind the iconic image of Steve Ballmer passionately exclaiming "Developers, Developers, Developers!". While I possess a strong background in development, I have found immense satisfaction in utilizing my knowledge to excel as a software tester. This role has not only allowed me to expedite my learning of new programming languages, including automation frameworks, but also enabled me to collaborate effectively with developers to identify and resolve issues, elevating the overall code quality.');
    cy.get('#developer p').eq(1).contains('I learned some basic programming a child with HyperCard. In high school, I become a proficient typist, was in Technology Club, and learned HTML and JavaScript to make a website for my class, for all the Erics online, and NFTY NW. During my college years, while pursuing a major in Management Information Systems (MIS) and a minor in Computer Science (CS), I further expanded my repertoire, delving into C++, ASP, ASP.NET, CSS, XML, and web services. Additionally, I leveraged my expertise to create and update websites for the school recreation center, Hillel, a DJ, and a cookie jar company. Notably, my coursework involved developing a mock e-commerce CD store resembling Amazon.com, complete with a dynamic wishlist feature. Most recently, I have successfully created this website with assistance from ChatGPT, examples online, and the valuable input of my peers.');
    cy.get('#developer p').eq(2).contains('Throughout my professional journey, I have continuously expanded my skill set, acquiring proficiency in various programming languages and technologies. I have garnered experience in shell scripting, bash, AppleScript, VBScript, Objective-C (developing a Cocoa testing application), Swift, Ruby, Java (building an Android application), Kotlin, Python, and C#. Additionally, I have delved into the realm of AI/ML, creating chatbots for internal use and gaining work.');
  })

  it('Verify the UX Design section', () => {
    cy.get('#uxdesign h3').contains('ROLES (');
    cy.get('#uxdesign a').eq(0).contains('QE'); 
    cy.get('#uxdesign a').eq(1).contains('DEV');
    cy.get('#uxdesign .black').contains('UXD'); // selected
    cy.get('#uxdesign a').eq(2).contains('LEAD');

    cy.get('#uxdesign h1').eq(0).contains('UX Designer');

    cy.get('#uxdesign p').contains('With my passion for delighting customers and sharing creative ideas, I have always been fascinated with the User Experience Designer role. As a participant and seeing usability studies during my career I see the value they can bring. In 2022, I received a University of Washington certificate in UX Design. The program included 3 courses learning the following:');
    cy.get('#uxdesign #course-li').eq(0).contains('Course 1: Design thinking, brainstorming, user research with interviewing, archetypes, competitive analysis, collaboration, and user journeys');
    cy.get('#uxdesign #course-li').eq(0).should('have.css', 'list-style-type', 'disc');
    cy.get('#uxdesign #course-li').eq(1).contains('Course 2: Information architecture, feature prioritization, flowcharts, sitemaps, card sorting, user testing, and creating a low-fidelity prototype');
    cy.get('#uxdesign #course-li').eq(1).should('have.css', 'list-style-type', 'disc');
    cy.get('#uxdesign #course-li').eq(2).contains('Course 3: Visual design, accessibility, moodboards, color, typography, grid, shadow, styleguide, basic motion, and creating a high-fidelity prototype');
    cy.get('#uxdesign #course-li').eq(2).should('have.css', 'list-style-type', 'disc');

    cy.get('#uxdesign #course-li')
    .should('have.css', 'font-size', '16px')
    .should('have.css', 'font-family', 'Poppins, sans-serif')
    .should('have.css', 'color', 'rgb(74, 74, 67)'); // #4A4A43
  })

  it('Verify the UXD methods section', () => {
    cy.get('#uxd-methods h3').contains('METHODS');
    cy.get('#uxd-methods h1').contains('My UX coursework');

    cy.get('#uxd-methods h2').eq(0).contains('Problem Statement');
    cy.get('#uxd-methods p').eq(0).contains('When initiating a new project, it is important to comprehend the (potential) problem(s) that the team intends to address for the end user. By harnessing the power of both data and intuition, I am able to acquire a comprehensive understanding of the user challenges and devise impactful solutions that effectively cater to their needs.');

    cy.get('#uxd-methods h2').eq(1).contains('Interviewing');
    cy.get('#uxd-methods p').eq(1).contains('To gain insights into relevant past experiences, conducting interviews is crucial. I prepare by creating an outline, identifying diverse interviewees, and crafting unbiased questions, including a mix of open-ended and required ones. With a consent form and recording tool, I actively listen during interviews, encouraging honest responses with pauses. Afterwards, I review notes and recordings, extracting meaningful quotes and capturing essential details. If appropriate, I follow up with interviewees for further discussions.');

    cy.get('#uxd-methods h2').eq(2).contains('Archetypes & Personas');
    cy.get('#uxd-methods p').eq(2).contains('Reviewing interview data can help identify archetypes and personas. I look at broad patterns and characteristics to identify archetypes. These might be common traits, motivations, and behaviors. With these archetypes I create fictional users as personas to help identify target audiences to stakeholders.');

    cy.get('#uxd-methods h2').eq(3).contains('Journey Mapping');
    cy.get('#uxd-methods p').eq(3).contains('Using journey mapping, I visualize the user experience from start to end, incorporating personas, data, research, and stakeholder input. This comprehensive approach captures touchpoints, emotions, pain-points, thoughts, and actions, guiding design decisions and improvements for best-in-class experiences that exceed user expectations.');

    cy.get('#uxd-methods h2').eq(4).contains('Brainstorming');
    cy.get('#uxd-methods p').eq(4).contains('Brainstorming is a valuable technique I enjoy for generating and iterating ideas towards potential solutions. It involves exploring different words associated with the problem statement in a supportive and diverse team setting. Promising ideas/words are selected, further brainstorming may occur on specific sub-topics, and a word cloud image can be created to visualize the collective insights.');

    cy.get('#uxd-methods h2').eq(5).contains('Features, Sitemap, & Card Sorting');
    cy.get('#uxd-methods p').eq(5).contains('Based on gathered research, I create a feature list and collaborate with the team to visualize the effort and impact of each feature using an Effort-Impact grid. Additionally, to establish a navigational sitemap with user-friendly labels and hierarchy, I employ the UX technique of card sorting, which involves engaging users in organizing and categorizing content.');

    cy.get('#uxd-methods h2').eq(6).contains('Moodboard, Brand, & Design System');
    cy.get('#uxd-methods p').eq(6).contains('To establish the desired design aesthetics for a project, I create a mood board—a curated collection of visuals, such as drawings, photos, audio, and text. This serves as a reference point for establishing the project\'s brand identity, including the logo, voice, and tone. It also forms the foundation of an essential design system, encompassing accessible typography, controls (atoms, molecules, & organisms), and grids. Regular review and iteration with stakeholders ensure alignment and refinement.');

    cy.get('#uxd-methods h2').eq(7).contains('Prototyping & User Testing');
    cy.get('#uxd-methods p').eq(7).contains('During the project\'s early stages, I create low-fidelity prototypes to focus on functionality, using paper or digital tools without specific visual details. As the design system is established, I transition to high-fidelity prototypes resembling the final product, including visual richness, interactive transitions, and elements addressing user pain points. All prototypes undergo diverse scenario-based user testing and iterative improvements based on feature prioritization, schedule constraints, and user feedback. Careful consideration is given to the impact of iterations on other team members involved in the project.');

    cy.get('#uxd-methods h2')
    .should('have.css', 'font-size', '24px')
    .should('have.css', 'font-family', '"Libre Caslon Display", serif')
    .should('have.css', 'color', 'rgb(74, 74, 67)'); // #4A4A43

    cy.get('#uxd-methods p')
    .should('have.css', 'font-size', '16px')
    .should('have.css', 'font-family', 'Poppins, sans-serif')
    .should('have.css', 'color', 'rgb(74, 74, 67)'); // #4A4A43
  })

  it('Verify the UXD prototype section', () => {
    cy.get('#prototype-section h3').contains('PROTOTYPE');
    cy.get('#prototype-section h1').contains('TherapistFinder');

    cy.get('#prototype-section p').eq(0).contains('I took the problem statement of finding a therapist to eventually build an interactive iPad app prototype in Figma. This prototype not only addressed pain points in the user journey, but also showcased the intuitive features and functionalities that would assist individuals in discovering the right therapist for their needs. Feel free to download my presentation about this process or review my coursework methods.');
    
    cy.get('#prototype-section p').eq(1).contains('Low-fidelity screenshot:');
    cy.get('#lowFiPrototypeImg')
      .should('exist')
      .should('have.attr', 'src', '../media/lowFidelityPrototype.png') 
      .should('have.attr', 'alt', 'low-fidelity prototype');

    cy.get('#prototype-section p').eq(2).contains('Explore my interactive, high-fidelity prototype:');
    cy.get('#highFiPrototypeImg')
    .should('exist')
    .should('have.attr', 'src', '../media/therapistFinderLogo.png') 
    .should('have.attr', 'alt', 'high-fidelity prototype therapistFinder logo');
    cy.get('#prototype-section #viewPrototype a').should('have.attr', 'href').and('equals', 'https://www.figma.com/proto/if933Ye5zrCzMebeFLeADg/Therapist-Finder-Wireframes?page-id=179%3A1475&node-id=232-1559&viewport=241%2C48%2C0.34&scaling=scale-down&starting-point-node-id=232%3A1559');
  })

  it('Verify the Lead section', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('.subnav').click(); 
    cy.get('ul li a').eq(2).click(); 

    cy.get('#leader h3').contains('ROLES (');
    cy.get('#leader a').eq(0).contains('QE'); 
    cy.get('#leader a').eq(1).contains('DEV');
    cy.get('#leader a').eq(2).contains('UXD');
    cy.get('#leader .black').contains('LEAD'); // selected

    cy.get('#leader h1').eq(0).contains('Leader');

    cy.get('#leader p').eq(0).contains('As I\'ve progressed in my career, I have embraced a leadership role within the realm of software testing. This growth aligns with my early achievements, such as attaining the highest rank of Eagle Scout, which represents the pinnacle of accomplishment in the Boy Scouts of America. During my high school years, I held the role of President in my youth group, fostering my aptitude for effective management and teamwork.');
    cy.get('#leader p').eq(1).contains('During college, I successfully completed a Management Information Systems major, which solidified my technical foundation and nurtured my passion for leadership. The program provided comprehensive knowledge in various aspects of management. After college, I joined a steering committee that engaged 50+ adults in their 20s and 30s through various programs, further refining my leadership abilities.');
    cy.get('#leader p').eq(2).contains('Building upon these foundations, my college degree provided me with invaluable insights into various management principles and practices. Through my studies, I gained a deep understanding of effective leadership, strategic planning, and team dynamics. These academic experiences, combined with my practical involvement in leadership roles, have equipped me with a well-rounded skill set and a passion for guiding teams towards success.');
    cy.get('#leader p').eq(3).contains('I derive great satisfaction from supporting and assisting others, as it not only contributes to the growth and success of those around me, but also serves as a continuous source of personal growth and learning. By assuming leadership responsibilities and leveraging my expertise as a software tester, I am able to make a meaningful impact while further enhancing my skills and knowledge in the field.');
    cy.get('#leader p').eq(4).contains('As a professional, I have undertaken diverse leadership roles. I have served as a Scrum Master, guiding and empowering cross-functional teams to achieve their project objectives efficiently and effectively. Additionally, I have taken a leadership role at ticket triage meetings and bug bashes, ensuring seamless issue resolution and promoting collaborative problem-solving among team members. Alongside these responsibilities, I have had the opportunity to coach and mentor fellow staff, nurturing their skills and fostering a culture of continuous improvement.');
    cy.get('#leader p').eq(5).contains('Engaging in these leadership endeavors has proven to be enjoyable, witnessing the positive impact of my guidance and support on the team\'s performance and individual growth. This includes leading QA meetings of 10+ participants on an international product team of 100+, sharing valuable insights and delivering impactful demos. These experiences have not only enhanced my professional development, but also reinforced my passion for fostering collaboration, enabling me to meaningfully contribute to the success of both individuals and the organization as a whole.');

    cy.get('#leader p')
    .should('have.css', 'font-size', '16px')
    .should('have.css', 'font-family', 'Poppins, sans-serif')
    .should('have.css', 'color', 'rgb(74, 74, 67)'); // #4A4A43
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