import './index.css'

const TabItem = props => {
  const {each, updateActiveTabId, isActive} = props
  const {displayText, tabId} = each

  const onClickChangeTab = () => {
    updateActiveTabId(tabId)
  }

  const activeClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="list-container">
      <button
        className={`button ${activeClassName}`}
        type="button"
        onClick={onClickChangeTab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
