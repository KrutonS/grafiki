import cn from "classnames";
import React, { useState } from "react";

const Select = ({
  options,
  label,
  selected,
  setSelected,
  className,
  noChoiceText,
}) => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);
  return (
    <div className={cn("dropdown-container", className)}>
      <span className='dropdown-label' onClick={toggle}>
        {label}
      </span>
      <div className='dropdown-header dropdown-cell' onClick={toggle}>
        {selected?.label || noChoiceText}
      </div>
      <div className='dropdown-list-wrapper'>
        <ul className={cn("dropdown-list", { "dropdown-list--show": show })}>
          {options.map((o) => (
            <li
              key={o.value}
              onClick={() => setSelected(o)}
              className={cn("dropdown-item dropdown-cell", {
                "dropdown-item--selected": selected === o,
              })}
            >
              {o.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Select;
