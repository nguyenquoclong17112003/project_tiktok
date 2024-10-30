import React from "react";
import classNames from "classnames/bind";
import Header from "~/components/Layout/components/Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import styles from "~/components/Layout/DefaultLayout/DefaultLayout.module.scss";

const cx = classNames.bind(styles);

export default function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}
