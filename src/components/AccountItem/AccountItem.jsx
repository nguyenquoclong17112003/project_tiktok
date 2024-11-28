import React from "react";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

export default function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://cdn.oneesports.vn/cdn-data/sites/4/2022/08/LQM-Valhein-EVO.jpg"
        alt="Hoaaa"
      />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>trumvaheinvnn</span>
          <FontAwesomeIcon className={cx("icon-ticket")} icon={faCheckCircle} />
        </p>
        <span className={cx("username")}>Trùm Vanhein</span>
      </div>
    </div>
  );
}
