import React from "react";
import classNames from "classnames/bind";
import styles from "~/components/Layout/DefaultLayout/Sidebar/Sidebar.module.scss";

const cx = classNames.bind(styles);

export default function Sidebar() {
  return (
    <>
      <aside className={cx("wrapper")}>
        <h2>Sidebar</h2>
      </aside>
    </>
  );
}
