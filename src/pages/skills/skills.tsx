import "./skills.scss";

const Skills = () => {
  return (
    <article>
      <h1>Skills</h1>
      <div className="time-line-container">
        <div className="time-line">
          <div className="timeline-item">
            <h2>Languages</h2>
            <blockquote>
              <p>C#, Java, JavaScript, TypeScript, HTML, CSS</p>
            </blockquote>
          </div>

          <div className="timeline-item">
            <h2>Frontend</h2>
            <blockquote>
              <p>
                Angular, React, RxJS, NgRx, TypeScript, State Management,
                Tailwind, Bootstrap, PrimeNG, Prime React, SASS
              </p>
            </blockquote>
          </div>

          <div className="timeline-item">
            <h2>Backend &amp; Frameworks</h2>
            <blockquote>
              <p>
                C#, .NET, ASP.NET Core, Java, Spring Boot, Node.js, REST APIs,
                Entity Framework, Hibernate, LINQ, JWT, OAuth, Polly, Payment
                Integrations (Moneris, POS, transaction workflows), Webhooks
              </p>
            </blockquote>
          </div>

          <div className="timeline-item">
            <h2>Cloud &amp; Infrastructure</h2>
            <blockquote>
              <p>
                AWS, Azure, Docker, CI/CD (GitHub Actions, GitLab CI, Jenkins),
                Cloudflare, Nginx
              </p>
            </blockquote>
          </div>

          <div className="timeline-item">
            <h2>Databases &amp; Messaging</h2>
            <blockquote>
              <p>
                PostgreSQL, MySQL, SQL Server, MongoDB, Redis, RabbitMQ,
                Database Design, Query Optimization, Stored Procedures
              </p>
            </blockquote>
          </div>

          <div className="timeline-item">
            <h2>AI & Automation</h2>
            <blockquote>
              <p>
                AI-Assisted Development, Prompt Engineering, LLM Integration,
                OpenAI APIs, Harness AI DevOps, AI Workflow Automation,
                Retrieval-Augmented Generation (RAG) fundamentals
              </p>
            </blockquote>
          </div>

          <div className="timeline-item">
            <h2>DevOps &amp; Tooling</h2>
            <blockquote>
              <p>
                Git, GitHub, Azure DevOps, Bitbucket, Jenkins, Grafana, Jira,
                Agile, Scrum, Swagger, xUnit, NUnit, JUnit, TDD, Cypress, Jest,
                k6, Gatling
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Skills;
