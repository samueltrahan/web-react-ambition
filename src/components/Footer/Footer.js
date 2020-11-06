import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div>
     <footer className="footer">
       <div className="copy-right">
       <p>&copy;<a target='_blank' rel="noreferrer" href="https://www.cinquewd.com">2020 Cinque Web Development</a></p>
       </div>
       <div className="social-links">
       <a target="_blank" rel="noreferrer" className="github" href="https://github.com/Cinque-Web-Development"><i id="github" className="fab fa-github fa-3x"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
       <a target="_blank" rel="noreferrer" href="https://twitter.com/cinquewebdev"><i className="fab fa-twitter fa-3x"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
       <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/cinque-web-dev"><i className="fab fa-linkedin fa-3x"></i></a>
       </div>
     </footer>
    </div>
  )
}
