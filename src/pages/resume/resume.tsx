import "./resume.scss";

const Resume = () => {
  return (
    <section>
      <h1>Where I've Worked</h1>
      <div className="time-line-container">
        <div className="time-line">
          <div className="job-content">
            <h2>Fullstack Developer at Condominium Authority of Ontario</h2>
            <p>
              <i>Toronto, Canada | Feb 2023 - Current</i>
            </p>
            <blockquote>
              <p>
                Developing software to facilitate dispute resolution for
                condominium owners in Ontario, directors and managers in
                accordance with the Condominium Law using C#, .Net 9, Entity
                Framework Core, Redis with SQL Server and Azure.
              </p>
              <p>
                Front end using Angular 18 in an Agile SCRUM environment.
                Covering the application using Jest
              </p>
            </blockquote>
          </div>
          <div className="job-content">
            <h2>Fullstack Developer at TrustArc / Nymity</h2>
            <p>
              <i>Toronto, Canada | Jun 2018 - Jan 2023</i>
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
            <h2>Fullstack Developer at Edenred</h2>
            <p>
              <i>Sao Paulo, Brazil | Oct 2016 - Mar 2018</i>
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
        </div>
      </div>
    </section>
  );
};

export default Resume;
