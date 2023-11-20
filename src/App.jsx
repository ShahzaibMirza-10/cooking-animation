import "./App.css";

function App() {
  return (
    <>
       
    <div className="container">
      <div id="side-bar">
        <div id="pic"></div>
        <span id="batch">Shahzaib Akram</span>

        <span id="html">HTML</span>
        <span className="skill"></span>
        <span id="skill-one"></span>
        <span className="cir"></span>

        <span id="css">CSS</span>
        <span className="skill"></span>
        <span id="skill-two"></span>
        <span className="cir" id = "cir1"></span>

        <span id="js">JavaScript</span>
        <span className="skill"></span>
        <span id="skill-three"></span>
        <span className="cir" id = "cir2"></span>

        <span id="ps">Adobe Photoshop</span>
        <span className="skill"></span>
        <span id="skill-four"></span>
        <span className="cir" id = "cir3"></span>

        <span id="ai">Adobe illustrator</span>
        <span className="skill"></span>
        <span id="skill-five"></span>
        <span className="cir" id = "cir4"></span>

        <span id="wp">Wordpress</span>
        <span className="skill"></span>
        <span id="skill-six"></span>
        <span className="cir" id = "cir5"></span>


        {/* <div id="navbar">
          <ul>
            <li>
              <a href="App.jsx">About me</a>
            </li>
            <li>
              <a href="education.jsx">Education</a>
            </li>
            <li>
              <a href="skills.jsx">Skills</a>
            </li>
            <li>
              <a href="experience.jsx">Experience</a>
            </li>
          </ul>
        </div> */}
      </div>

      <div id="about">
        <span id="fn">SHAHZAIB</span>

        <br />
        <span id="box1" className="last"></span>
        <span id="box2" className="last"></span>
        <span id="box3" className="last"></span>
        <span id="box6" className="last"></span>
        <span id="box5" className="last"></span>
        <span id="box4" className="last"></span>
        <span id="box7" className="last"></span>
        <span id="ln" className="last">
          AKRAM
        </span>

        <div id="two-container">
          <div className="glass-box">
            <h3>Objective</h3>
            <span id="h3span"></span>
            <p>
              Looking for an opportunity in well reputed organization where I
              can utilize and enhance my capabilities as a professional and
              utilize my all skills for well being of organization
            </p>
          </div>
          <span id="line"></span>
        </div>
        <span id="address">Sheikh Cotton Colony</span>
        <span id="city">Vehari</span>
        <span id="github"></span>
        <span id="facebook"></span>
        <span id="linkedin"></span>
        <span id="pinterest"></span>
        <span id="twitter"></span>
      </div>

      <div className="education">
        <h1>Education</h1>
        <div id="glass-box1">
          <thead>
            <th>degree</th>
            <th>Year</th>
            <th>Institue</th>
          </thead>

          <tbody>
            <tr>
              <td>Bs-IT</td>
              <td>Continue...</td>
              <td>University of Education</td>
            </tr>

            <tr>
              <td>ICS</td>
              <td>2020</td>
              <td>Punjab Group of College Vehari</td>
            </tr>

            <tr>
              <td>Matric(Science)</td>
              <td>2018</td>
              <td>Divisional Public School Vehari</td>
            </tr>
          </tbody>
        </div>
      </div>
      
        <span id = "box">Download Cv</span>
    </div>
    </>
  );
}



export default App;
