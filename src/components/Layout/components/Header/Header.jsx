import React, { useEffect, useState } from "react";
import HeadlessTippy from "@tippyjs/react/headless"; // ! use
import Tippy from "@tippyjs/react";
import classNames from "classnames/bind";
import styles from "~/components/Layout/components/Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AccountItem } from "~/components/AccountItem";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import Button from "~/components/Button/Button";

import Menu from "~/components/Popper/Menu/Menu";
import {
  faTimesCircle,
  faSpinner,
  faMagnifyingGlass,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faMessage,
  faAdd,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";

import images from "~/assets/images";

const cx = classNames.bind(styles);

const currentUser = true;

const MENU_ITEMS = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          id: "1",
          code: "en",
          title: "English",
          type: "language",
        },
        {
          id: "2",
          code: "vi",
          title: "Tiếng Việt",
          type: "language",
        },
      ],
    },
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard Shortcuts",
  },
];

export default function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2]);
    }, 3000);
  });

  const handleChange = (item) => {
    switch (item.type) {
      case "language":
        // handle change
        console.log("abc");

        break;
      default:
        console.log("ERROR: Unknown");
    }
  };

  const userMenu = [
    {
      id: 7,
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View Profile",
      to: "/@user",
    },
    {
      id: 8,
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coin",
    },
    {
      id: 9,
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "/setting",
    },
    ...MENU_ITEMS,

    {
      id: 10,
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      to: "/logout",
      seperate: true,
    },
  ];
  return (
    <>
      <header className={cx("wrapper")}>
        <div className={cx("inner")}>
          <div className={cx("logo")}>
            <img src={images.logo} alt="TikTok" />
          </div>

          <HeadlessTippy
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
          </HeadlessTippy>

          <div className={cx("actions")}>
            {currentUser ? (
              <>
                <Button block leftIcon={<FontAwesomeIcon icon={faAdd} />}>
                  Upload
                </Button>

                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faMessage} />
                </button>
              </>
            ) : (
              <>
                <Button primary>Login</Button>
              </>
            )}

            <Menu
              items={currentUser ? userMenu : MENU_ITEMS}
              onChange={handleChange}
            >
              {currentUser ? (
                <img
                  src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/7325541927221198855.jpeg?lk3s=a5d48078&nonce=90042&refresh_token=8aa562cbe76518da185d77b18505cfaf&x-expires=1736600400&x-signature=K1ylom6Bg9hJlRZccyJcCoWcR%2Fk%3D&shp=a5d48078&shcp=81f88b70"
                  className={cx("user-avatar")}
                  alt="name"
                />
              ) : (
                <button className={cx("more-btn")}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              )}
            </Menu>
          </div>
        </div>
      </header>
    </>
  );
}
