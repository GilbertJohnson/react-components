import AccordionItem from "./AccordionItem"
import { useState, useCallback } from 'react';
import data from '../data/data'
const Accordian = () => {
    const [allowMultipleOpen,setAllowMultipleOpen] = useState(true);
    const [activeAccordions,setActiveAccordions] = useState(new Set());
    const handleMultipleOpenChoice = useCallback(()=>{
        setAllowMultipleOpen((choice)=>!choice);
    },[])
    const toggleAccordion = useCallback((id:number)=>{
        setActiveAccordions((opened)=>{
            const updatedActiveAccordions = new Set(opened);
            if(updatedActiveAccordions.has(id)){
                updatedActiveAccordions.delete(id);
            }else{
                if(!allowMultipleOpen){
                    updatedActiveAccordions.clear()
                }
                updatedActiveAccordions.add(id);
            }
            return updatedActiveAccordions;
        })
    },[allowMultipleOpen]);
  return (
    <>
        <div className="app-container">
            <div className="checkboxContainer">
                <label className="checkboxLabel" htmlFor="multiple-open">
                    Allow multiple open?
                </label>
                <input type="checkbox" name="multiple-open" id="multiple-open" onChange={handleMultipleOpenChoice} checked={allowMultipleOpen}/>
            </div>
            <div className="content-info">
                {data.map((accordion)=>(
                    <AccordionItem
                        key={accordion.id}
                        isActive={activeAccordions.has(accordion.id)}
                        toggleAccordion={toggleAccordion}
                        {...accordion}
                        />
                ))}
            </div>
        </div>
    </>
  )
}

export default Accordian