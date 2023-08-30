import { useState, useRef, useLayoutEffect } from "react"
import fleche from '../../assets/images/vectorBas.svg'

function Collapse({aboutCollapse, aboutTitle, aboutText}) {
  
    const [toggle, setToggle] = useState(false)
    const [open, setOpen] = useState()

    const toggleCollapse = () => {
        setToggle(!toggle)
    }

    const refHeight = useRef()

    useLayoutEffect(() => {
        setOpen(`${refHeight.current.scrollHeight}px`)
      }, [toggle])


    return (
      <div className={`collapse ${aboutCollapse}`}>
            <div onClick={toggleCollapse} className="collapse__visible">
            <h2>{aboutTitle}</h2>
            <img className={toggle ? "fleche rotate" : "fleche"} src={fleche} alt="fleche" />
            </div>
            <div ref={refHeight} className={toggle ? "collapse__toggle animated" : "collapse__toggle"} style={{ height: toggle ? open : "0px"}}>
                <p aria-hidden={toggle ? "true" : "false"}>{aboutText}</p>
            </div>

        </div>
      
    )
  }
  
  export default Collapse