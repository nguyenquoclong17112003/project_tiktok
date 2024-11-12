import React from "react";
import classNames from "classnames/bind";
import styles from "~/components/Layout/components/Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faSpinner,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import images from "~/assets/images";

const cx = classNames.bind(styles);

export default function Header() {
  return (
    <>
      <header className={cx("wrapper")}>
        <div className={cx("inner")}>
          <div className={cx("logo")}>
            <img src={images.logo} alt="TikTok" />
          </div>
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

          <div className={cx("actions")}></div>
        </div>
      </header>
    </>
  );
}
