import "./resume.scss";

const Resume = () => {
  return (
    <article>
      <h1>Where I've Worked</h1>
      <div className="time-line-container">
        <div className="time-line">
          <div className="timeline-item">
            <h2>
              Senior Software Engineer at Condominium Authority of Ontario
            </h2>
            <p>
              <i>Toronto, Canada | Feb 2023 - Current</i>
            </p>
            <blockquote>
              <p>
                Delivered a province-wide dispute resolution platform used
                across Ontario for condominium owners in Ontario, directors and
                managers in accordance with the Condominium Law using C#, .Net,
                Entity Framework Core, Redis with SQL Server and Azure.
              </p>
              <p>
                Built backend services with C# .NET, Entity Framework, Redis,
                and SQL Server, deployed on Azure.
              </p>
              <p>
                Integrated Payment Gateway (Moneris) for online payments,
                Webhooks, handling transaction processing, payment validation,
                and reconciliation workflows.
              </p>
              <p>
                Designed secure payment flows for fee collection, including
                error handling, retry logic (Polly), and auditability of
                transactions.
              </p>
              <p>
                Developed Angular applications that support complex,
                workflow-driven user experiences.
              </p>
              <p>
                Improved system performance through query optimization, caching,
                and backend enhancements.
              </p>
            </blockquote>
          </div>
          <div className="timeline-item">
            <h2>Senior Software Engineer at TrustArc</h2>
            <p>
              <i>Toronto, Canada | Feb 2020 - Jan 2023</i>
            </p>
            <blockquote>
              <p>
                Developed and maintained web applications for more than 1,500
                clients across the globe. Created new APIs and Components. Using
                Angular, C#, Java, .Net, Entity Framework, Postgres, Docker and
                AWS/Azure. Covering the code using integration, e2e and unit
                testing with NUnit and Cypress in an Agile SCRUM environment.
              </p>
              <p>
                Lead the creation of the new component library from scratch.
                Using Angular, Typescript, RxJs, HighCharts and CSS to attend to
                the company's new design system to help maintain consistency
                across products and reduce development time by around 15%.
                Covering the application using unit testing (Karma + Jasmine)
                and e2e testing (Cypress).
              </p>
            </blockquote>
          </div>
          <div className="timeline-item">
            <h2>Senior Software Engineer at Nymity</h2>
            <p>
              <i>Toronto, Canada | Mar 2018 - Jan 2020</i>
            </p>
            <blockquote>
              <p>
                Designed and delivered backend features and REST APIs using C#,
                .NET, Angular, and SQL, contributing to scalable enterprise SaaS
                architecture.
              </p>
              <p>
                Implemented JWT authentication and contributed to Single Sign-On
                (SSO) initiatives across multiple products.
              </p>
              <p>
                Introduced Entity Framework into legacy systems, improving
                development velocity and maintainability.
              </p>
              <p>
                Optimized database queries and stored procedures, resolving
                performance bottlenecks in production systems.
              </p>
              <p>
                Built reusable engineering utilities and contributed to shared
                authorization/permissions systems used across products.
              </p>
            </blockquote>
          </div>
          <div className="timeline-item">
            <h2>Senior Fullstack Developer at Codepxl</h2>
            <p>
              <i>Toronto, Canada | Nov 2015 - Feb 2018</i>
            </p>
            <blockquote>
              <p>
                Worked on multiple client applications, including healthcare,
                e-commerce, and customer-facing platforms using React Native,
                C#/.NET, and REST APIs.
              </p>
              <p>
                Built CI Hear Again (Sunnybrook Health Sciences Centre): React
                Native mobile app for clinical audio recognition testing,
                supporting patient assessment workflows.
              </p>
              <p>
                Developed C# ASP.NET REST APIs for secure communication between
                mobile applications and backend services.
              </p>
              <p>
                Built React Native e-commerce applications integrated with
                OpenCart, including product browsing, cart, and checkout flows.
              </p>
              <p>
                Delivered React frontend features for customer engagement and
                loyalty-focused applications.
              </p>
              <p>
                Worked across frontend and backend integration layers to support
                end-to-end application delivery.
              </p>
            </blockquote>
          </div>
          <div className="timeline-item">
            <h2>Senior Software Engineer at Edenred</h2>
            <p>
              <i>Sao Paulo, Brazil | Oct 2014 - Oct 2015</i>
            </p>
            <blockquote>
              <p>
                Developed applications, components & functionality for existing
                systems and integration with clients. Using C#, .Net, Web API,
                WCF, MySql, NHibernate, RabbitMQ, XUnit and Azure.
              </p>
              <p>
                Developed applications with Angular, Typescript, HTML, CSS and
                Bootstrap. Covering the application using unit testing (Karma +
                Jasmine) and e2e testing (Protractor).
              </p>
            </blockquote>
          </div>
          <div className="timeline-item">
            <h2>Senior Software Engineer at LTM Group</h2>
            <p>
              <i>Sao Paulo, Brazil | Nov 2010 - Sep 2014</i>
            </p>
            <blockquote>
              <p>
                Developed applications for loyalty and rewards programs with
                more than 25 million active users. Using C#, .Net Framework 4,
                SQL Server, Entity Framework, WCF, NUnit, ADO and Azure.
                Integration to transfer, redeem or accumulate points by (.xsl,
                .csv, .txt, IBM Connect Direct, POS and APIs) in an Agile SCRUM
                environment.
              </p>
              <p>
                Created applications with AngularJS, HTML and CSS. Covering the
                application using e2e testing (Selenium).
              </p>
            </blockquote>
          </div>
          <div className="timeline-item">
            <h2>Fullstack Developer at Stefanini</h2>
            <p>
              <i>Sao Paulo, Brazil | Dec 2009 - Oct 2010</i>
            </p>
            <blockquote>
              <p>
                Participated in defining system design, architecture and
                specifications and performed project and task estimation.
              </p>
              <p>Designed Web pages with ASP.NET and C# .NET</p>
              <p>
                Developed Web Services to send and receive information with
                banks
              </p>
              <p>
                Designed databases and wrote Queries, Stored Procedures in
                Oracle and SQL Server
              </p>
            </blockquote>
          </div>
          <div className="timeline-item">
            <h2>Fullstack Developer at Rapp</h2>
            <p>
              <i>Sao Paulo, Brazil | Nov 2007 - Nov 2009</i>
            </p>
            <blockquote>
              <p>
                Developing Websites using PHP, ASP.NET &amp; other programming
                tools
              </p>
              <p>Developed Plugins for WordPress and custom CMS</p>
              <p>
                Designed databases and wrote Queries, Stored Procedures in SQL
                Server and MySQL
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Resume;
