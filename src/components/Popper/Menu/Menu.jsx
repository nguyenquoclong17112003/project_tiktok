import React, { useState } from "react";
import Tippy from "@tippyjs/react/headless"; // ! use library tippy.js để làm tooltip and dropdown
import classNames from "classnames/bind";
import { Wrapper as PopperWrapper } from "~/components/Popper";

import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import Header from "./Header";

const cx = classNames.bind(styles);

export default function Menu({ children, items = [], onChange }) {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1];

  const renderItems = () => {
    // eslint-disable-next-line array-callback-return
    return current.data.map((item) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={item.id}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };
  return (
    <div>
      <Tippy
        interactive
        visible
        delay={[0, 700]}
        offset={[12, 8]}
        appendTo={document.body}
        placement="bottom-start"
        render={(attrs) => (
          <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              {history.length > 1 && (
                <Header
                  title="Language"
                  onBack={() => {
                    setHistory((prev) => prev.slice(0, history.length - 1));
                  }}
                />
              )}
              {renderItems()}
            </PopperWrapper>
          </div>
        )}
        onHide={() =>
          setHistory((prev) => {
            if (prev.length > 1) {
              return prev.slice(0, 1);
            }
            return prev;
          })
        }
        arrow={true}
      >
        {children}
      </Tippy>
    </div>
  );
}
