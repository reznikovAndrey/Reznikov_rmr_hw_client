import React, { FC, PropsWithChildren, useState } from 'react';

import styles from './Dropdown.module.scss';

import { ReactComponent as DropdownIcon } from '../../Icons/dropdown.svg';

const Dropdown: FC<PropsWithChildren> = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleIconClick = () => setShow(!show);
  const handleMenuItemClick = () => setShow(false);

  const items = React.Children.toArray(children);

  return (
    <div className={styles.dropdown}>
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
