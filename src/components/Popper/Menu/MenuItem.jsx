import React from "react";
import Button from "../../Button/Button";

import classNames from "classnames/bind";

import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

export default function MenuItem({ data, onClick }) {
  const classes = cx("menu-item", {
    seperate: data.seperate,
  });
  return (
    <Button
      className={classes}
      leftIcon={data.icon}
      to={data.to}
      block
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}
