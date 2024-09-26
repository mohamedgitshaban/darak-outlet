import { For } from 'react-loops'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
function CategoryFilter(params) {
  const [open, setOpen] = useState(false);

    return <><li data-toggle="collapse" >
    <a  onClick={() => setOpen(!open)}
        aria-controls={params.name}
        aria-expanded={open}>{params.name}</a>
        <span>&#8594;</span>
        
</li><Collapse in={open}>
         <ul className="sub-menu collapse" id={params.name}>
       
        <For of={params.data}>
        {item =>
        <li><input type='checkbox' /> <a href="#">{item}</a> </li>
    }
      </For>
    </ul>
      </Collapse></>
}
export default CategoryFilter;
