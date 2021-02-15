import "./portfolio.css";

const Portfolio = () => {
  return (
    <>
      <div className='centerDiv bg-img-intro'>
        <h1>Jasper Reed</h1>
      </div>
      <div className='centerDiv'>
        <h1>Technical Background</h1>
        <div>
          <p>
            Attending the University of Vermont from fall 2018 - spring 2020 as
            a computer sciense major, I became enfactuated with how computers
            worked and the different languages used to comunicate with them.
            Throughout my time at university, I spent countless hours trying to
            balance my social, academic, and athletic life whcih ultimately led
            to my departure.
          </p>

          <p>
            Quickly after my departure from UVM, I found Flatiron School, a
            coding bootcamp that has campuses all around the United States.
            Flatiron School offered to me what any university could not, a
            chance to focus soley on what I had a passion for and lay waste to
            any distractions that can come with the social aspect of college.
          </p>

          <p>
            While at Flatiron, I completed 525 Clock hours of learning (whether
            that be coding, in lecture, or reading materials pertinante to the
            course) and many more outside of the structure of the course.
            Learning Ruby, Ruby on Rails, JavaScript, React and Redux, I have a
            great base for Full-Stack Development, but more importatnly, I am
            able to aquire new skills and be proficient in them quickly.
          </p>

          <p>
            Currently I am employed at Flatiron School as a Technical Coach,
            Software Engineering (the same disapline I studied while attending),
            growing my knowledge each day.
          </p>
        </div>
        <div>
          <h1>Flatiron Certificate Go Here</h1>
        </div>
      </div>
      <div className='centerDiv'>
        <h1>Projects</h1>
        <p>
          Hosting projects is a huge part of displaying my proficiency with
          writing code and while I do not currently have any project hosted feel
          free to view some of my code on GitHub.
          <ul>
            <li>Project Link 1</li>
            <li>Project Link 2</li>
            <li>Project Link 3</li>
            <li>Project Link 4</li>
          </ul>
        </p>
      </div>
      <div className='centerDiv'>
        <h1>Whats Next?</h1>
        <p>
          Moving forward, I want to focus on both expanding my knowledge and
          becoming a resource for minorities looking to get into tech. Diversity
          has been such a huge part of my life and now that I am in a position
          where diversity is lacking, I want create as many mutually beneficial
          partnerships that drive growth on bost thised of the relationship.
        </p>
      </div>
      <div>
        <footer>Contact Me @</footer>
      </div>
    </>
  );
};

export default Portfolio;
