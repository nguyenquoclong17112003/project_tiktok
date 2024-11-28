import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react/headless"; // ! use library tippy.js để làm tooltip and dropdown
import classNames from "classnames/bind";
import styles from "~/components/Layout/components/Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AccountItem } from "~/components/AccountItem";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import Button from "~/components/Button/Button";

import {
  faTimesCircle,
  faSpinner,
  faMagnifyingGlass,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";

import images from "~/assets/images";

const cx = classNames.bind(styles);

export default function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2]);
    }, 3000);
  });
  return (
    <>
      <header className={cx("wrapper")}>
        <div className={cx("inner")}>
          <div className={cx("logo")}>
            <img src={images.logo} alt="TikTok" />
          </div>

          <Tippy
            interactive
            appendTo={document.body}
            visible={searchResult.length > 0}
            render={(attrs) => (
              <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                  <h4 className={cx("search-title")}>Accounts</h4>
                  <AccountItem />
                  <AccountItem />

                  <AccountItem />
                  <AccountItem />
                </PopperWrapper>
              </div>
            )}
          >
            <div className={cx("search")}>
              <input
                type="text"
                className={cx("search_input")}
                placeholder="Search videos"
                spellCheck={false}
              />
              <button className={cx("clear")}>
                <FontAwesomeIcon icon={faTimesCircle} />
              </button>
              <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

              <button className={cx("search-btn")}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </Tippy>

          <div className={cx("actions")}>
            <Button primary>Login</Button>
          </div>
        </div>
      </header>
    </>
  );
}
