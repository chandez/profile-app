import "./home.scss";
const Home = () => {
  return (
    <article>
      <h1>Welcome</h1>
      <div className="panel-border-left">
        <div className="panel-content">
          <p>
            Hello. My name is Chander, and I am a software engineer passionate
            about technology and science.
          </p>
          <p>
            Senior Software Engineer with 8+ years of experience building and
            delivering scalable platforms used by millions of users and
            enterprise organizations.
          </p>
          <p>
            Combines technical expertise with a pragmatic, results-driven
            approach to build reliable, secure, and maintainable systems.
          </p>
          <p>
            Strong communicator who works effectively with cross-functional
            teams to solve problems, align priorities, and deliver business
            value.
          </p>
        </div>
      </div>
      <div className="panel-border-left">
        <div className="panel-content">
          <p>
            In my free time, I enjoy practicing Jiu-Jitsu, which has taught me
            discipline, focus, and the importance of continual learning and
            growth.
          </p>
          <p>
            I have always been fascinated by the power of technology to solve
            complex problems and improve people's lives. I constantly look for
            new challenges and opportunities to grow as an engineer.
          </p>
        </div>
      </div>
    </article>
  );
};

export default Home;
