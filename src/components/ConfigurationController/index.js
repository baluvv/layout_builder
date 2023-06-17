import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onClickShowContent = () => {
        onToggleShowContent()
      }

      const onClickShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onClickShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-container">
          <h1 className="configuration-heading">Layout</h1>
          <div className="input-container">
            <input
              id="content"
              type="checkbox"
              checked={showContent}
              onClick={onClickShowContent}
            />
            <label className="label" htmlFor="content">
              Content
            </label>
          </div>
          <div className="input-container">
            <input
              id="left-navbar"
              type="checkbox"
              checked={showLeftNavbar}
              onClick={onClickShowLeftNavbar}
            />
            <label className="label" htmlFor="left-navbar">
              Left Navbar
            </label>
          </div>
          <div className="input-container">
            <input
              id="right-navbar"
              type="checkbox"
              checked={showRightNavbar}
              onClick={onClickShowRightNavbar}
            />
            <label className="label" htmlFor="right-navbar">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
