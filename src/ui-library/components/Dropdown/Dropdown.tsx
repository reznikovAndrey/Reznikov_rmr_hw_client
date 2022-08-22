import React, { FC, PropsWithChildren, useEffect, useRef, useState } from 'react';

import styles from './Dropdown.module.scss';

import { ReactComponent as DropdownIcon } from '../../icons/dropdown.svg';

const Dropdown: FC<PropsWithChildren> = ({ children }) => {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleIconClick = () => setShow(!show);
  const handleMenuItemClick = () => setShow(false);
  const handleOutsideMenuClick = (e: MouseEvent | TouchEvent) => {
    if (show && !dropdownRef.current?.contains(e.target as Node)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideMenuClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideMenuClick);
    };
  }, [show]);

  const items = React.Children.toArray(children);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <DropdownIcon className={styles.icon} onClick={handleIconClick} />
      {show && (
        <ul className={styles.dropdownList}>
          {items.map((item, idx) => (
            <li
              // eslint-disable-next-line react/no-array-index-key
              key={`menu-item-list-${idx}`}
              className={styles.item}
              onClick={handleMenuItemClick}
              onKeyPress={handleMenuItemClick}
              role="menuitem"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
