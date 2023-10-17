import "./resume.scss";

const Resume = () => {
  return (
    <section>
      <h1>Where I've Worked</h1>
      <div className="time-line-container">
        <div className="time-line">
          <div className="job-content">
            <h2>Fullstack Developer at TrustArc</h2>
            <p>
              <i>Toronto, Canada | Dec 2019 - Jan 2021</i>
            </p>
            <blockquote>
              <p>
                Developed and maintained web applications for more than 1,500
                clients across the globe. Created new APIs and Components. Using
                Angular, C#, Java, .Net Core 3, Entity Framework, Postgres,
                Docker and AWS/Azure. Covering the code using integration, e2e
                and unit testing with NUnit and Cypress in an Agile SCRUM
                environment.
              </p>
              <p>
                Created a new component library from scratch. Using Angular,
                Typescript, RxJs, HighCharts and CSS to attend to the company's
                new design system to help maintain consistency across products
                and reduce development time by around 15%. Covering the
                application using unit testing (Karma + Jasmine) and e2e testing
                (Cypress).
              </p>
            </blockquote>
          </div>
          <div className="job-content">
            <h2>Fullstack Developer at Nymity</h2>
            <p>
              <i>Toronto, Canada | Jun 2018 - Dec 2019</i>
            </p>
            <blockquote>
              <p>
                Developed and maintained applications. Using C#, .Net Core 3,
                Web API, Entity Framework Core, SQL Server, Service Bus, NUnit
                and Azure.
              </p>
              <p>
                Developed and maintained reusable components with Angular,
                Typescript, HTML, CSS and Bootstrap. Covering the application
                using unit testing (Karma + Jasmine) and e2e testing
                (Protractor).
              </p>
            </blockquote>
          </div>
          <div className="job-content">
            <h2>Fullstack Developer at Edenred</h2>
            <p>
              <i>Sao Paulo, Brazil | Oct 2016 - Oct 2019</i>
            </p>
            <blockquote>
              <p>
                Developed applications, components & functionality for existing
                systems and integration with clients. Using C#, .Net Core 2, Web
                API, WCF, MySql, NHibernate, RabbitMQ, XUnit and Azure.
              </p>
              <p>
                Developed applications with Angular, Typescript, HTML, CSS and
                Bootstrap. Covering the application using unit testing (Karma +
                Jasmine) and e2e testing (Protractor).
              </p>
            </blockquote>
          </div>
          <div className="job-content">
            <h2>Fullstack Developer at LTM Group</h2>
            <p>
              <i>Sao Paulo, Brazil | Nov 2010 - Sep 2016</i>
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
          <div className="job-content">
            <h2>Fullstack Developer at Stefanini</h2>
            <p>
              <i>Sao Paulo, Brazil | Dec 2009 - Nov 2010</i>
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
          <div className="job-content">
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
          <div className="job-content">
            <h2>Fullstack Developer at Concremat Setepla</h2>
            <p>
              <i>Sao Paulo, Brazil | Jan 2005 - Oct 2007</i>
            </p>
            <blockquote>
              <p>
                Analyzed user specifications for workability, completeness and
                business flow
              </p>
              <p>
                Participated in defining system design, architecture and task
                estimation
              </p>
              <p>
                Developed Web Services to send and receive information with
                government
              </p>
              <p>
                Designed databases and wrote Queries, Stored Procedures in SQL
                Server
              </p>
            </blockquote>
          </div>
          <div className="job-content">
            <h2>Fullstack Developer at Technological Research Institute IPT</h2>
            <p>
              <i>Sao Paulo, Brazil | Oct 2002 - Dec 2004</i>
            </p>
            <blockquote>
              <p>
                Developing new applications, components &amp; functionality to
                existing systems
              </p>
              <p>
                Involved in accurately providing estimated development times
              </p>
              <p>Developing new functionalities, both back-end and front-end</p>
              <p>
                Designing, developing, testing &amp; configuring for a custom
                pre-authenticated scenario
              </p>
            </blockquote>
          </div>
          <div className="job-content">
            <h2>Fullstack Developer at VM2 Technology &amp; Design</h2>
            <p>
              <i>Sao Paulo, Brazil | Set 1998 - Out 2002</i>
            </p>
            <blockquote>
              <p>
                Developing advanced database driven websites &amp; systems
                including e-Commerce
              </p>
              <p>
                Back end development and maintenance of websites using PHP, ASP
                and MySQL
              </p>
              <p>
                Developing web sites using MySQL, PHP, ASP &amp; other
                programming tools
              </p>
              <p>
                Working in a data analyst role and with business intelligence
                applications
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
