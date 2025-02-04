import PropTypes from 'prop-types'
import './Accordion.css'
const AccordionItem = ({id,title,info,toggleAccordion,isActive}) => {
    const handleExpandCollapse=()=>{
        toggleAccordion(id)
    }
  return (
    <div className="accordion-container">
        <div className="toggleinfo">
            <h2>{title}</h2>
            <button 
                className="toggleButton"
                onClick={handleExpandCollapse}
                aria-expanded={isActive}
            >
                {isActive?'-':'+'}
            </button>
        </div>
        <div className={`accordion-content ${isActive?'open':''}`}>
            <p>{info}</p>
        </div>
    </div>
  )
}
AccordionItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    toggleAccordion: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired
}

export default AccordionItem