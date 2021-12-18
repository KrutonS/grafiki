import cn from "classnames";
import React, { memo, useLayoutEffect, useRef, useState } from "react";
import accessibleClick from "../../utils/accessibleClick";

const Select = memo(
  ({ options, label, selected, setSelected, className, noChoiceText }) => {
    const [show, setShow] = useState(false);
    const toggle = () => setShow(!show);
    const accessibleToggle = accessibleClick(toggle);
    const containerRef = useRef(null);
    useLayoutEffect(() => {
      const containerHtml = containerRef.current;
      const onFocusOut = () => {
        setShow(false);
      };
      containerHtml.addEventListener("focusout", onFocusOut);
      return () => {
        containerHtml.removeEventListener("focusout", onFocusOut);
      };
    }, []);
    // const onBlur = (e) => {
    // 	console.log(e);
    //   if (show) setShow(false);
    // };
    return (
      <nav
        onFocus={() => setShow(true)}
        className={cn("dropdown-container", className)}
        ref={containerRef}
        // onBlurCapture={onBlur}
      >
        <span className='dropdown-label' {...accessibleToggle}>
          {label}
        </span>
        <div className='dropdown-header dropdown-cell' {...accessibleToggle}>
          {selected?.label || noChoiceText}
        </div>
        <div className='dropdown-list-wrapper'>
          <ul className={cn("dropdown-list", { "dropdown-list--show": show })}>
            {options.map((o) => (
              <li
                key={o.value}
                className={cn("dropdown-item dropdown-cell", {
                  "dropdown-item--selected": selected === o,
                })}
                {...accessibleClick(() => setSelected(o))}
              >
                {o.label}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
);

export default Select;
