// import { createRoot } from 'react-dom';
// import Aboutpage from "./aboutpage";
// import '../css/aboutus.css'
const { useState, useEffect } = React;

var csrfToken = readCookie('csrfToken');

const About = () => {
    // return <Aboutpage />
    return (
    <div>
    <div className='about-container'>
        <div className='about-heading-div'>
          <h1>ABOUT US</h1>
        </div>
        <div className='about-container'>
          <div className='about-brief'>
            <div className='about-mission'>
              <h2>MISSION</h2>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod autem ratione actum est, id officium appellamus. Cur igitur easdem res, inquam, Peripateticis dicentibus verbum nullum est, quod non intellegatur? Sed ad illum redeo. Tecum optime, deinde etiam cum mediocri amico. Quae quo sunt excelsiores, eo dant clariora indicia naturae. Ergo hoc quidem apparet, nos ad agendum esse natos. Illa officium appellamus. Cur igitur easdem res, inquam, Peripateticis dicentibus verbum nullum est, quod non intellegatur? Sed ad illum redeo. Tecum optime, deinde etiam cum mediocri amico. Quae quo sunt excelsiores, eo dant clariora indicia naturae. Ergo hoc quidem apparet, nos ad agendum esseofficium appellamus. Cur igitur easdem res, inquam, Peripateticis dicentibus verbum nullum est, quod non intellegatur? Sed ad illum redeo. Tecum optime, deinde etiam cum mediocri amico. Quae quo sunt excelsiores, eo dant clariora indicia naturae. Ergo hoc quidem apparet, nos ad agendum esse sunt similia: hebes acies est cuipiam oculorum, corpore alius senescit;</p>
              </div>
            </div>
            <div className='about-values'>
              <h2>VALUES</h2>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod autem ratione actum est, id officium appellamus. Cur igitur easdem res, inquam, Peripateticis dicentibus verbum nullum est, quod non intellegatur? Sed ad illum redeo. Tecum optime, deinde etiam cum mediocri amico. Quae quo sunt excelsiores, eo dant clariora indicia naturae. Ergo hoc quidem apparet, nos ad agendum esse natos. Illa officium appellamus. Cur igitur easdem res, inquam, Peripateticis dicentibus verbum nullum est, quod non intellegatur? Sed ad illum redeo. Tecum optime, deinde etiam cum mediocri amico. Quae quo sunt excelsiores, eo dant clariora indicia naturae. Ergo hoc quidem apparet, nos ad agendum esseofficium appellamus. Cur igitur easdem res, inquam, Peripateticis dicentibus verbum nullum est, quod non intellegatur? Sed ad illum redeo. Tecum optime, deinde etiam cum mediocri amico. Quae quo sunt excelsiores, eo dant clariora indicia naturae. Ergo hoc quidem apparet, nos ad agendum esse sunt similia: hebes acies est cuipiam oculorum, corpore alius senescit;</p>
              </div>
            </div>
            <div className='about-vision'>
              <h2>VISION</h2>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod autem ratione actum est, id officium appellamus. Cur igitur easdem res, inquam, Peripateticis dicentibus verbum nullum est, quod non intellegatur? Sed ad illum redeo. Tecum optime, deinde etiam cum mediocri amico. Quae quo sunt excelsiores, eo dant clariora indicia naturae. Ergo hoc quidem apparet, nos ad agendum esse natos. Illa officium appellamus. Cur igitur easdem res, inquam, Peripateticis dicentibus verbum nullum est, quod non intellegatur? Sed ad illum redeo. Tecum optime, deinde etiam cum mediocri amico. Quae quo sunt excelsiores, eo dant clariora indicia naturae. Ergo hoc quidem apparet, nos ad agendum esseofficium appellamus. Cur igitur easdem res, inquam, Peripateticis dicentibus verbum nullum est, quod non intellegatur? Sed ad illum redeo. Tecum optime, deinde etiam cum mediocri amico. Quae quo sunt excelsiores, eo dant clariora indicia naturae. Ergo hoc quidem apparet, nos ad agendum esse sunt similia: hebes acies est cuipiam oculorum, corpore alius senescit;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='about-second'>
        <div>
        <h2>OUR APPROACH</h2>
        <div>
          voluptatem. Quid ergo attinet gloriose loqui, nisi constanter loquare? An est aliquid per se ipsum flagitiosum, etiamsi nulla comitetur infamia? Duo Reges: constructio interrete. At certe gravius. Videamus igitur sententias eorum, tum ad verba redeamus. Hoc loco discipulos quaerere videtur, ut, qui asoti esse velint, philosophi ante fiant.
          <ul>
            <li>
              An eum locum libenter invisit, ubi Demosthenes et Aeschines inter se decertare soliti sunt?
            </li>
            <li>
              Dicam, inquam, et quidem discendi causa magis, quam quo te aut Epicurum reprehensum velim.
            </li>
            <li>
              Varietates autem iniurasque fortunae facile veteres philosophorum praeceptis instituta vita superabat.
              Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit?
            </li>
          </ul>
        </div>
        </div>
        <div>
        <div>
        <h2>ACHIEVEMENTS</h2>
        <div>
          <ul>
            <li>
              An eum locum libenter invisit, ubi Demosthenes et Aeschines inter se decertare soliti sunt?
            </li>
            <li>
              Dicam, inquam, et quidem discendi causa magis, quam quo te aut Epicurum reprehensum velim.
            </li>
            <li>
              Varietates autem iniurasque fortunae facile veteres philosophorum praeceptis instituta vita superabat.
              Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit?
            </li>
          </ul>
        </div>
        </div>
        </div>
      </div>
      <div className='about-team'>
        <div><h1>OUR TEAM</h1></div>
        <div className='carousel-container'>
          <img src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.webp?b=1&s=170667a&w=0&k=20&c=lrHSjzuqKIAC76-vpOhzR7pRsP38DGPWt7x7SOFbm0Q="
            alt="person1" />
        </div>
      </div>
    </div>
    )
}

ReactDOM.render(<About />, document.querySelector('#aboutus-root'))


// createRoot(document.getElementById('aboutus-root')).render(<About />);