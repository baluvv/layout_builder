import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar && (
            <ul className="left-right-nav-container">
              <h1 className="left-right-nav-heading">Left Navbar Menu</h1>
              <li className="left-nav-item">item 1</li>
              <li className="left-nav-item">item 2</li>
              <li className="left-nav-item">item 3</li>
              <li className="left-nav-item">item 4</li>
            </ul>
          )}
          {showContent && (
            <div className="content-container">
              <h1 className="content-heading">Content</h1>
              <p className="content">
                Lorem ipsum dolar sit amet, consectetur adipiscing elit sed do
                eismod temper incididunt ut labore et dolore magna aliqua. Ut
                anim and minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <ul className="left-right-nav-container">
              <h1 className="left-right-nav-heading">Right Navbar Menu</h1>
              <li className="right-nav-item">Ad 1</li>
              <li className="right-nav-item">Ad 2</li>
            </ul>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
