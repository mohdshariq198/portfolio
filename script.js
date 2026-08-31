/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {

  menuToggle.addEventListener('click', () => {

    const isOpen = siteNav.classList.toggle('open');

    menuToggle.setAttribute(
      'aria-expanded',
      String(isOpen)
    );

    menuToggle.setAttribute(
      'aria-label',
      isOpen
        ? 'Close navigation'
        : 'Open navigation'
    );

  });


  siteNav.querySelectorAll('a').forEach((link) => {

    link.addEventListener('click', () => {

      siteNav.classList.remove('open');

      menuToggle.setAttribute(
        'aria-expanded',
        'false'
      );

      menuToggle.setAttribute(
        'aria-label',
        'Open navigation'
      );

    });

  });

}


/* =========================================================
   CONTACT FORM
   ========================================================= */

const contactForm =
  document.querySelector('#contact-form');

const formStatus =
  document.querySelector('#form-status');

if (contactForm && formStatus) {

  contactForm.addEventListener(
    'submit',
    async (event) => {

      event.preventDefault();

      if (!contactForm.reportValidity()) {
        return;
      }

      const submitButton =
        contactForm.querySelector(
          'button[type="submit"]'
        );

      const senderName =
        contactForm
          .querySelector('#name')
          .value
          .trim();

      submitButton.disabled = true;

      submitButton.setAttribute(
        'aria-busy',
        'true'
      );

      formStatus.textContent =
        'Sending your message...';

      formStatus.className =
        'form-status';


      try {

        const response =
          await fetch(
            contactForm.action,
            {
              method: 'POST',
              body: new FormData(contactForm),
              headers: {
                Accept: 'application/json'
              }
            }
          );


        if (!response.ok) {
          throw new Error(
            'Formspree submission failed'
          );
        }


        contactForm.reset();

        formStatus.textContent =
          `Thank you, ${senderName}! Your message has been sent to Mohd Shariq.`;

        formStatus.className =
          'form-status success';

      }

      catch (error) {

        formStatus.textContent =
          'Your message could not be sent. Please try again or email me directly.';

        formStatus.className =
          'form-status error';

      }

      finally {

        submitButton.disabled = false;

        submitButton.removeAttribute(
          'aria-busy'
        );

      }

    }
  );

}


/* =========================================================
   DREAM COMPANIES
   ========================================================= */

const companyDetails = {

  accenture: {
    name: 'Accenture',
    industry: 'Technology and consulting',
    description:
      'A global professional services company working across technology, consulting, and digital transformation. Its varied client projects would offer opportunities to apply structured testing across complex products.',
    focus:
      'Enterprise web applications and client solutions'
  },

  amazon: {
    name: 'Amazon',
    industry: 'E-commerce and cloud technology',
    description:
      'A global technology company known for customer-focused products, online retail, and cloud services. The scale of its systems makes reliability, performance, and automation central QA challenges.',
    focus:
      'High-scale customer journeys and services'
  },

  flipkart: {
    name: 'Flipkart',
    industry: 'E-commerce technology',
    description:
      'An Indian e-commerce company building digital shopping experiences and marketplace services. Its customer, seller, payment, and delivery journeys create rich opportunities for end-to-end testing.',
    focus:
      'Marketplace, payments, and checkout flows'
  },

  tcs: {
    name: 'TCS',
    industry: 'IT services and consulting',
    description:
      'A global IT services and consulting organization serving clients across industries. Its broad technology work aligns well with disciplined test planning, functional validation, and delivery quality.',
    focus:
      'Client solutions and enterprise quality engineering'
  },

  wipro: {
    name: 'Wipro',
    industry: 'IT services and digital consulting',
    description:
      'A technology services company helping organizations modernize applications and operations. Its digital projects connect strongly with API testing, regression coverage, and collaborative defect analysis.',
    focus:
      'Digital transformation and application testing'
  },

  infosys: {
    name: 'Infosys',
    industry: 'IT services and consulting',
    description:
      'A global consulting and technology services company supporting digital transformation. It offers a strong setting for combining domain knowledge with automation and quality processes.',
    focus:
      'Enterprise systems and automation strategy'
  },

  microsoft: {
    name: 'Microsoft',
    industry: 'Software and cloud technology',
    description:
      'A global technology company building software, cloud platforms, developer tools, and business applications. Its products create opportunities to test accessible, secure, scalable, and integrated user experiences.',
    focus:
      'Cloud services, business applications, and quality engineering'
  },

  google: {
    name: 'Google',
    industry: 'Internet and technology',
    description:
      'A technology company known for search, advertising, cloud, mobile, and developer products. Its large-scale services require careful functional, API, compatibility, and data validation.',
    focus:
      'Scalable services and user-focused product quality'
  },

  facebook: {
    name: 'Facebook',
    industry: 'Social technology',
    description:
      'A social technology platform focused on communication, communities, and digital experiences. Its constantly evolving products benefit from thoughtful workflow, usability, privacy, and regression testing.',
    focus:
      'Social features, privacy, and cross-device experiences'
  },

  apple: {
    name: 'Apple',
    industry: 'Consumer technology',
    description:
      'A technology company creating hardware, software, and services with a strong focus on user experience. Its ecosystem calls for precise cross-device, integration, usability, and end-to-end validation.',
    focus:
      'Integrated products and polished user experiences'
  },

  ibm: {
    name: 'IBM',
    industry: 'Enterprise technology and consulting',
    description:
      'A long-standing technology company working across hybrid cloud, AI, software, and enterprise services. Its complex solutions align with structured test planning, data validation, and risk-based QA.',
    focus:
      'Enterprise platforms, data, and hybrid cloud quality'
  },

  cognizant: {
    name: 'Cognizant',
    industry: 'IT services and consulting',
    description:
      'A professional services company helping organizations modernize technology and business operations. Its client-focused work offers opportunities to combine domain knowledge with functional and automation testing.',
    focus:
      'Digital transformation and client application quality'
  },

  capgemini: {
    name: 'Capgemini',
    industry: 'Technology services and consulting',
    description:
      'A global technology services company supporting cloud, engineering, data, and digital transformation. Its broad delivery work suits collaborative QA across requirements, testing, automation, and release validation.',
    focus:
      'Cloud, digital engineering, and enterprise applications'
  },

  hcl: {
    name: 'HCL',
    industry: 'Technology services and engineering',
    description:
      'A global technology company working across engineering, cloud, software, and IT services. Its products and client solutions create room for disciplined functional, API, database, and regression testing.',
    focus:
      'Engineering services and enterprise software quality'
  },

  techmahindra: {
    name: 'Tech Mahindra',
    industry: 'IT services and digital transformation',
    description:
      'A technology services organization delivering solutions across telecommunications, enterprise, and digital industries. Its varied projects align with end-to-end validation and Agile quality collaboration.',
    focus:
      'Digital solutions, integrations, and customer journeys'
  },

  ey: {
    name: 'EY',
    industry: 'Professional services and consulting',
    description:
      'A global professional services organization working across assurance, consulting, strategy, and technology. Its business-critical platforms require careful validation of workflows, data, controls, and reporting.',
    focus:
      'Business-critical systems, controls, and data quality'
  },

  deloitte: {
    name: 'Deloitte',
    industry: 'Consulting and professional services',
    description:
      'A professional services organization providing consulting, risk, financial, and technology services. Its projects call for careful validation of business rules, data, and client-facing platforms.',
    focus:
      'Risk-aware systems and business process quality'
  },

  mahindra: {
    name: 'Mahindra',
    industry: 'Automotive and mobility',
    description:
      'A diversified group with a strong presence in automotive, mobility, and technology. Its products bring together physical experiences and digital platforms that benefit from thorough, user-focused testing.',
    focus:
      'Mobility platforms and customer experience'
  }

};


const companyButtons =
  document.querySelectorAll(
    '.company-button'
  );

const companyName =
  document.querySelector(
    '#company-name'
  );

const companyIndustry =
  document.querySelector(
    '#company-industry'
  );

const companyDescription =
  document.querySelector(
    '#company-description'
  );

const companyFocus =
  document.querySelector(
    '#company-focus'
  );


companyButtons.forEach((button) => {

  button.addEventListener('click', () => {

    const company =
      companyDetails[
        button.dataset.company
      ];

    if (!company) {
      return;
    }


    companyButtons.forEach((item) => {

      item.classList.remove(
        'selected'
      );

      item.setAttribute(
        'aria-expanded',
        'false'
      );

    });


    button.classList.add(
      'selected'
    );

    button.setAttribute(
      'aria-expanded',
      'true'
    );


    if (companyName) {
      companyName.textContent =
        company.name;
    }

    if (companyIndustry) {
      companyIndustry.textContent =
        company.industry;
    }

    if (companyDescription) {
      companyDescription.textContent =
        company.description;
    }

    if (companyFocus) {
      companyFocus.textContent =
        company.focus;
    }

  });

});


/* =========================================================
   TOOLKIT MODAL
   ========================================================= */

const toolkitDetails = {

  testing: {
    title: 'Testing',
    description:
      'A structured testing approach for understanding risk, validating requirements, and protecting critical user journeys.',
    items: [
      'Manual, functional, regression, exploratory, and smoke testing',
      'UI, integration, end-to-end, and cross-browser validation',
      'Test scenario, test case, and test plan preparation'
    ]
  },

  domains: {
    title: 'Domains',
    description:
      'Experience testing products across healthcare, banking, and enterprise environments where accuracy and reliability matter.',
    items: [
      'Healthcare and Eyecare: patient management and appointment workflows',
      'Banking and Financial Services: loan workflows and state-specific rules',
      'Enterprise and SaaS: business workflows, role-based scenarios, and integrations'
    ]
  },

  tools: {
    title: 'Tools',
    description:
      'Tools used to validate APIs, backend data, and delivery workflows while keeping defects and requirements visible to the team.',
    items: [
      'Postman for REST API testing and request/response validation',
      'pgAdmin for PostgreSQL database testing and data verification',
      'Jira for bug tracking, user story tracking, and defect follow-up'
    ]
  },

  technical: {
    title: 'Technical',
    description:
      'Technical skills that support reliable, data-driven quality engineering across web and service-based applications.',
    items: [
      'Selenium WebDriver and Java for test automation',
      'SQL, PostgreSQL, and MS SQL for backend validation',
      'JavaScript and Git for test development and collaboration'
    ]
  }

};


const toolkitButtons =
  document.querySelectorAll(
    '.toolkit-button'
  );

const toolkitModal =
  document.querySelector(
    '#toolkit-modal'
  );

const toolkitModalTitle =
  document.querySelector(
    '#toolkit-modal-title'
  );

const toolkitModalDescription =
  document.querySelector(
    '#toolkit-modal-description'
  );

const toolkitModalList =
  document.querySelector(
    '#toolkit-modal-list'
  );

let lastToolkitButton;


const closeToolkitModal = () => {

  if (!toolkitModal) {
    return;
  }

  toolkitModal.hidden = true;

  document.body.style.overflow = '';

  lastToolkitButton?.focus();

};


toolkitButtons.forEach((button) => {

  button.addEventListener('click', () => {

    const details =
      toolkitDetails[
        button.dataset.toolkit
      ];

    if (!toolkitModal || !details) {
      return;
    }

    lastToolkitButton = button;

    toolkitModalTitle.textContent =
      details.title;

    toolkitModalDescription.textContent =
      details.description;

    toolkitModalList.innerHTML =
      details.items
        .map(
          (item) => `<li>${item}</li>`
        )
        .join('');

    toolkitModal.hidden = false;

    document.body.style.overflow =
      'hidden';

    toolkitModal
      .querySelector('.modal-close')
      ?.focus();

  });

});


toolkitModal
  ?.querySelectorAll(
    '[data-modal-close]'
  )
  .forEach((closeButton) => {

    closeButton.addEventListener(
      'click',
      closeToolkitModal
    );

  });


/* =========================================================
   CASE STUDIES
   ========================================================= */

const caseStudies = {

  'patient-profile': {

    title:
      'Patient Data & Profile Validation',

    body:
      `<p><strong>Domain:</strong> Healthcare<br>
      <strong>Module:</strong> Patient Management<br>
      <strong>Role:</strong> Software Test Engineer<br>
      <strong>Testing:</strong> Functional, Regression, UI, Exploratory, Database</p>

      <h3>About the project</h3>

      <p>
      A healthcare application that manages patient information
      and related workflows. The patient module was responsible
      for capturing and maintaining important patient details
      used throughout the application.
      </p>

      <h3>QA challenge</h3>

      <p>
      Patient information needs to be accurate and consistently
      maintained. My focus was to ensure that patient information
      behaved correctly across different user actions and scenarios.
      </p>

      <h3>What I tested</h3>

      <ul>
        <li>Patient profile creation and information updates</li>
        <li>Mandatory fields and field-level validations</li>
        <li>Valid and invalid data</li>
        <li>Boundary and negative scenarios</li>
        <li>UI behavior and data persistence</li>
        <li>Regression scenarios</li>
      </ul>

      <h3>Testing approach</h3>

      <p>
      Requirement Analysis → Test Design → Functional Testing →
      Negative Testing → Database Validation → Regression →
      Defect Retesting
      </p>

      <h3>Defects and risks</h3>

      <p>
      Identified issues related to validation, data handling,
      and workflow behavior and documented them in JIRA with
      clear reproduction steps and expected versus actual results.
      </p>

      <h3>Tools</h3>

      <p>
      JIRA, SQL, PostgreSQL, Postman, Manual Testing
      </p>

      <blockquote>
      Helped improve the reliability and accuracy of patient
      information by validating critical patient workflows,
      business rules, and data behavior before release.
      </blockquote>`
  },


  appointments: {

    title:
      'Patient Appointments',

    body:
      `<p><strong>Domain:</strong> Healthcare<br>
      <strong>Module:</strong> Appointment Management<br>
      <strong>Role:</strong> Software Test Engineer<br>
      <strong>Testing:</strong> Functional, Regression, Exploratory, End-to-End</p>

      <h3>About the project</h3>

      <p>
      The appointment module handled patient booking workflows,
      including creating, modifying, and cancelling appointments.
      </p>

      <h3>QA challenge</h3>

      <p>
      Appointment workflows involve available time slots, dates,
      patient information, and changes to existing appointments.
      A small issue in one part of the workflow could affect the
      complete booking journey.
      </p>

      <h3>What I tested</h3>

      <ul>
        <li>Appointment creation and available time slots</li>
        <li>Date and time validation</li>
        <li>Appointment rescheduling and cancellation</li>
        <li>Patient appointment details</li>
        <li>Positive, negative, and edge-case scenarios</li>
        <li>End-to-end booking and regression workflows</li>
      </ul>

      <h3>Testing approach</h3>

      <p>
      Requirement Analysis → Test Scenario Design →
      Functional Testing → Exploratory Testing →
      End-to-End Testing → Regression → Retesting
      </p>

      <h3>Example scenarios</h3>

      <table>

        <thead>

          <tr>
            <th>Scenario</th>
            <th>Expected result</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>Create appointment with valid details</td>
            <td>Appointment created successfully</td>
          </tr>

          <tr>
            <td>Select unavailable slot</td>
            <td>User cannot proceed</td>
          </tr>

          <tr>
            <td>Reschedule appointment</td>
            <td>Appointment details updated correctly</td>
          </tr>

          <tr>
            <td>Cancel appointment</td>
            <td>Appointment status updated correctly</td>
          </tr>

          <tr>
            <td>Invalid date/time</td>
            <td>Appropriate validation displayed</td>
          </tr>

          <tr>
            <td>Missing mandatory information</td>
            <td>User prompted to provide required data</td>
          </tr>

        </tbody>

      </table>

      <h3>Defect management</h3>

      <p>
      Logged defects in JIRA, prioritized them based on impact,
      worked with developers during clarification, and performed
      retesting after fixes.
      </p>

      <blockquote>
      Helped ensure that patients could move through the appointment
      lifecycle reliably, from booking to rescheduling and cancellation.
      </blockquote>`
  },


  'loan-terms': {

    title:
      'US State-Specific Loan Terms',

    body:
      `<p><strong>Domain:</strong> Banking / Financial Services<br>
      <strong>Area:</strong> Loan Terms &amp; Conditions<br>
      <strong>Role:</strong> Software Test Engineer<br>
      <strong>Testing:</strong> Web Testing, Content Validation,
      Business-Rule Testing, Regression</p>

      <h3>About the project</h3>

      <p>
      The application displayed loan-related terms and conditions
      for customers across different US states. My responsibility
      involved validating the information presented in the application
      against the corresponding website content.
      </p>

      <h3>QA challenge</h3>

      <p>
      Loan information could vary depending on the customer's state.
      The key challenge was ensuring that the application displayed
      the correct information for the applicable state and that
      customers were not presented with inconsistent terms.
      </p>

      <h3>What I tested</h3>

      <ul>
        <li>State-specific loan information and terms and conditions</li>
        <li>Pricing-related information and disclosures</li>
        <li>Content accuracy, links, and destinations</li>
        <li>State-based variations and UI presentation</li>
        <li>Business-rule scenarios and regression testing</li>
      </ul>

      <h3>Testing approach</h3>

      <p>
      Identify State Variations → Compare Expected Content →
      Validate Application → Document Discrepancies → Retest Fixes
      </p>

      <h3>Anonymized defect example</h3>

      <p>
      <strong>Severity:</strong> High
      </p>

      <p>
      <strong>Issue:</strong> State-specific loan term displayed incorrectly.
      </p>

      <p>
      <strong>Expected:</strong> Application should display the applicable
      information for the selected state.
      </p>

      <p>
      <strong>Actual:</strong> Different or inconsistent loan information
      was displayed.
      </p>

      <p>
      <strong>Action:</strong> Documented the discrepancy in JIRA with
      supporting evidence and coordinated with the relevant team for correction.
      </p>

      <h3>Tools</h3>

      <p>
      JIRA, Web Testing, Manual Testing, Content QA
      </p>

      <blockquote>
      Helped improve the accuracy and consistency of state-specific
      loan information presented to customers by systematically
      validating application content against the expected website implementation.
      </blockquote>`
  }

};


const caseStudyButtons =
  document.querySelectorAll(
    '.case-study-cta'
  );

const caseStudyModal =
  document.querySelector(
    '#case-study-modal'
  );

const caseStudyTitle =
  document.querySelector(
    '#case-study-title'
  );

const caseStudyBody =
  document.querySelector(
    '#case-study-body'
  );

let lastCaseStudyButton;


const closeCaseStudy = () => {

  if (!caseStudyModal) {
    return;
  }

  caseStudyModal.hidden = true;

  document.body.style.overflow = '';

  lastCaseStudyButton?.focus();

};


caseStudyButtons.forEach((button) => {

  button.addEventListener('click', () => {

    const study =
      caseStudies[
        button.dataset.caseStudy
      ];

    if (!caseStudyModal || !study) {
      return;
    }

    lastCaseStudyButton = button;

    caseStudyTitle.textContent =
      study.title;

    caseStudyBody.innerHTML =
      study.body;

    caseStudyModal.hidden = false;

    document.body.style.overflow =
      'hidden';

    caseStudyModal
      .querySelector('.modal-close')
      ?.focus();

  });

});


caseStudyModal
  ?.querySelectorAll(
    '[data-case-study-close]'
  )
  .forEach((closeButton) => {

    closeButton.addEventListener(
      'click',
      closeCaseStudy
    );

  });


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener(
  'keydown',
  (event) => {

    if (
      event.key === 'Escape' &&
      toolkitModal &&
      !toolkitModal.hidden
    ) {
      closeToolkitModal();
      return;
    }


    if (
      event.key === 'Escape' &&
      caseStudyModal &&
      !caseStudyModal.hidden
    ) {
      closeCaseStudy();
      return;
    }


    if (
      event.key === 'Escape' &&
      certificateModal &&
      !certificateModal.hidden
    ) {
      closeCertificateModal();
    }

  }
);


/* =========================================================
   CERTIFICATE PDF MODAL
   ========================================================= */

/*
  IMPORTANT:

  These keys MUST match the
  data-certificate values in certificates.html.
*/

const certificateFiles = {

  'java-full-stack': {

    title:
      'Java Full Stack',

    file:
      'certificates/java-full-stack.pdf'

  },


  'ai-associate': {

    title:
      'AI 101: GL Certified AI Associate-Developer',

    file:
      'certificates/ai-associate.pdf'

  },


  'qa': {

    title:
      'Test Automation with Selenium WebDriver for JAVA',

    file:
      'certificates/qa-automation.pdf'

  }

};


const certificateButtons =
  document.querySelectorAll(
    '.certificate-view-cta'
  );


const certificateModal =
  document.querySelector(
    '#certificate-modal'
  );


const certificateModalTitle =
  document.querySelector(
    '#certificate-modal-title'
  );


const certificateModalBody =
  document.querySelector(
    '#certificate-modal-body'
  );


let lastCertificateButton;


/* =========================================================
   CLOSE CERTIFICATE MODAL
   ========================================================= */

const closeCertificateModal = () => {

  if (!certificateModal) {
    return;
  }

  certificateModal.hidden = true;

  if (certificateModalBody) {

    certificateModalBody.innerHTML = '';

  }

  document.body.style.overflow = '';

  lastCertificateButton?.focus();

};


/* =========================================================
   OPEN CERTIFICATE MODAL
   ========================================================= */

certificateButtons.forEach((button) => {

  button.addEventListener('click', () => {

    const certificate =
      certificateFiles[
        button.dataset.certificate
      ];


    if (
      !certificateModal ||
      !certificate ||
      !certificateModalTitle ||
      !certificateModalBody
    ) {
      return;
    }


    lastCertificateButton =
      button;


    certificateModalTitle.textContent =
      certificate.title;


    /*
      iframe displays the PDF directly
      inside the modal.
    */

    certificateModalBody.innerHTML = `

      <iframe
        src="${certificate.file}"
        class="certificate-pdf-viewer"
        title="${certificate.title}"
        loading="lazy"
      ></iframe>

      <div class="certificate-pdf-actions">

        <a
          href="${certificate.file}"
          target="_blank"
          rel="noopener noreferrer"
          class="certificate-open-link"
        >
          Open PDF in New Tab →
        </a>

      </div>

    `;


    certificateModal.hidden = false;

    document.body.style.overflow =
      'hidden';


    certificateModal
      .querySelector('.modal-close')
      ?.focus();

  });

});


/* =========================================================
   CERTIFICATE CLOSE BUTTON + BACKDROP
   ========================================================= */

certificateModal
  ?.querySelectorAll(
    '[data-certificate-close]'
  )
  .forEach((closeButton) => {

    closeButton.addEventListener(
      'click',
      closeCertificateModal
    );

  });