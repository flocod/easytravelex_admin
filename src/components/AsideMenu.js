import React, { useRef, useEffect } from "react";
import imgLogo from "../images/logo.png";
import { NavLink } from "react-router-dom";

const AsideMenu = () => {
  const extend_menu = useRef();
  const btn_extend_menu = useRef();

  const handleClickBtnExtendMenu = () => {
    const element = extend_menu.current;
    const svg = btn_extend_menu.current.querySelector(".text svg");
    console.log("element", svg);

    if (element.classList.contains("active_extend_menu")) {
      svg.style.transform = "rotate(0deg)";
    } else {
      svg.style.transform = "rotate(-180deg)";
    }

    console.log("Extent menu", element);
    element.classList.toggle("active_extend_menu");
  };

  useEffect(() => {
    const temp__btn_extend_menu = btn_extend_menu.current;
    temp__btn_extend_menu.addEventListener(
      "click",
      handleClickBtnExtendMenu,
      false
    );
    return () => {
      temp__btn_extend_menu.removeEventListener(
        "click",
        handleClickBtnExtendMenu,
        true
      );
    };
  }, []);

  return (
    <aside className="aside_menu">
      <div className="aside_menu__struct">
        <div className="logo">
          {" "}
          <img src={imgLogo} alt="" />
        </div>

        <div className="menu">
          <NavLink to={"/"} className="menu_item">
            <div className="menu_item__struct">
              <div className="text">Dashboard</div>
              <svg
                className="home"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.2501 8.18844C20.3258 9.06897 20.8338 10.4687 20.5723 11.8338L19.4752 17.5596C19.1335 19.3449 17.5713 20.6363 15.7532 20.6363H8.24588C6.42786 20.6363 4.86663 19.3449 4.52394 17.5596L3.42771 11.8338C3.16627 10.4687 3.67329 9.06897 4.74897 8.18844L9.59888 4.21906C10.9957 3.07615 13.0042 3.07615 14.4003 4.21906L16.8251 6.20375"
                  stroke="#4A5568"
                  strokeWidth="1.44"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.49878 16.9812C9.49878 15.6002 10.6183 14.4806 11.9994 14.4806C13.3804 14.4806 14.5 15.6002 14.5 16.9812"
                  stroke="#4A5568"
                  strokeWidth="1.44"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </NavLink>

          <NavLink to={"/visas"} className="menu_item">
            <div className="menu_item__struct">
              <div className="text">Visa applications</div>
              <svg
                className="notebook-check"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0283 3C19.0813 3.0827 20.6993 4.77956 20.6847 6.83545V17.1635C20.7295 19.236 19.0871 20.9533 17.0147 20.999L8.62572 21C6.5854 21.0078 4.91384 19.3819 4.86519 17.3426V6.83545C4.81946 4.76302 6.46281 3.04573 8.53524 3.00097C8.55266 3.00041 11.3826 3.00017 13.7707 3.00007"
                  stroke="#4A5568"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.1543 15.9361H17.0128M15.852 12.2305H17.0127"
                  stroke="#4A5568"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.90234 10.3371L11.6206 12.0554L15.9367 7.73828"
                  stroke="#4A5568"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.31445 16.697H6.64007M3.31445 11.9984H6.64007M3.31445 7.30078H6.64007"
                  stroke="#4A5568"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </NavLink>

          <NavLink to={"/tours"} className="menu_item">
            <div className="menu_item__struct">
              <div className="text">Tours</div>
              <svg
                className="salad-1"
                width={21}
                height={22}
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_298_1068)">
                  <path
                    d="M20.3364 12.3125H20.5414C20.8411 11.6993 20.9978 11.0262 21 10.3438C21 8.98367 20.3942 7.77248 19.4517 6.93084C18.8262 4.73814 16.832 3.125 14.4375 3.125C14.2886 3.125 14.1483 3.15658 14.0023 3.16889C13.2727 1.59676 11.6895 0.5 9.84375 0.5C7.99805 0.5 6.41484 1.59676 5.68518 3.16889C5.53916 3.15658 5.39807 3.125 5.25 3.125C3.85761 3.125 2.52226 3.67812 1.53769 4.66269C0.553123 5.64726 0 6.98261 0 8.375C0 9.95738 0.714902 11.3552 1.82602 12.3125H0.663633C0.287109 12.3125 -0.0303516 12.6291 0.00246094 13.0032C0.274805 16.1356 2.38629 18.7204 5.25 19.7236V20.1875C5.25174 20.5366 5.39176 20.8707 5.63938 21.1167C5.88701 21.3627 6.22206 21.5005 6.57111 21.5H14.4564C15.1823 21.5 15.75 20.9122 15.75 20.1875V19.7154C18.6002 18.7056 20.726 16.127 20.9975 13.0032C21.0304 12.6291 20.7129 12.3125 20.3364 12.3125ZM19.6875 10.3438C19.6838 11.0579 19.4427 11.7505 19.0021 12.3125H13.8104C13.3699 11.7504 13.1288 11.0578 13.125 10.3438C13.125 9.47351 13.4707 8.63891 14.0861 8.02356C14.7014 7.4082 15.536 7.0625 16.4062 7.0625C17.2765 7.0625 18.1111 7.4082 18.7264 8.02356C19.3418 8.63891 19.6875 9.47351 19.6875 10.3438ZM1.3125 8.375C1.3125 6.93412 2.25586 4.07738 6.5625 4.4375C7.70561 1.82357 9.24 1.8125 9.84375 1.8125C10.4254 1.8125 11.9766 1.8125 13.125 4.4375C14.5634 4.31732 16.25 4.39238 17.4727 5.8874C17.1239 5.79956 16.7659 5.75344 16.4062 5.75C15.1883 5.7513 14.0206 6.2357 13.1594 7.09692C12.2982 7.95813 11.8138 9.12581 11.8125 10.3438C11.8137 11.0259 11.9692 11.6989 12.2674 12.3125H10.5V4.76562C10.5 4.6786 10.4654 4.59514 10.4039 4.53361C10.3424 4.47207 10.2589 4.4375 10.1719 4.4375H9.51562C9.4286 4.4375 9.34514 4.47207 9.28361 4.53361C9.22207 4.59514 9.1875 4.6786 9.1875 4.76562V11.3843L4.63477 6.83158C4.57324 6.77009 4.48981 6.73555 4.40282 6.73555C4.31584 6.73555 4.23241 6.77009 4.17088 6.83158L3.70535 7.29465C3.64386 7.35618 3.60932 7.43961 3.60932 7.52659C3.60932 7.61358 3.64386 7.69701 3.70535 7.75854L8.25809 12.3113H5.25C4.20629 12.3101 3.20565 11.895 2.46752 11.1571C1.72939 10.4192 1.31402 9.41871 1.3125 8.375ZM15.3312 18.4788L14.4375 18.7885V20.1875H6.5625V18.793L5.69174 18.4849C3.49084 17.7143 1.87605 15.8509 1.41873 13.625H19.5813C19.1252 15.8427 17.5194 17.7032 15.3312 18.4788Z"
                    fill="#6F6D6D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_298_1068">
                    <rect
                      width={21}
                      height={21}
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </NavLink>

          <NavLink to={"/cars"} className="menu_item">
            <div className="menu_item__struct">
              <div className="text">Car rentals</div>
              <svg
                className="car"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5371 13.6211H17.3344"
                  stroke="#4A5568"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.65625 13.6211H8.45355"
                  stroke="#4A5568"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.00391 9.43408C8.9651 10.2793 15.0157 10.2793 20.9769 9.43408"
                  stroke="#4A5568"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.4816 17.1676H7.76396C7.56329 17.1676 7.36583 17.2507 7.22484 17.3934C7.08385 17.5362 7.00358 17.7345 7.00615 17.9352V18.4598C7.03124 18.7513 6.92659 19.0482 6.72437 19.2596C6.52216 19.471 6.22993 19.5896 5.93763 19.5775H4.06267C3.77197 19.5868 3.48241 19.4669 3.28233 19.2558C3.08225 19.0447 2.97879 18.7496 3.00364 18.4598L3.02309 13.3689C3.02154 12.5699 3.27322 11.791 3.742 11.1441L4.92722 9.51223C5.02036 9.3873 5.09555 9.25004 5.15065 9.10427L6.19996 6.18973C6.46098 5.44314 7.13939 4.87184 7.91956 4.74195C10.6263 4.31518 13.3831 4.31518 16.0899 4.74195C16.8736 4.86861 17.5566 5.44058 17.8192 6.18973L18.8685 9.10427C18.9235 9.25615 18.9986 9.3994 19.092 9.53121L20.2577 11.0957C20.7369 11.7496 20.9955 12.5393 20.9961 13.3499V18.4598C21.0212 18.7513 20.9165 19.0482 20.7143 19.2596C20.5121 19.471 20.2196 19.5896 19.9273 19.5775H18.0621C17.7698 19.5896 17.4776 19.471 17.2754 19.2596C17.0731 19.0482 16.9683 18.7513 16.9933 18.4598V17.9352C16.9987 17.5209 16.6456 17.1676 16.2355 17.1676H14.721"
                  stroke="#4A5568"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </NavLink>

          <NavLink to={"/files"} className="menu_item">
            <div className="menu_item__struct">
              <div className="text">Customer file</div>
              <svg
                className="user-board"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.6581 19.7441H17.0218C19.7857 19.7441 21.5044 17.794 21.5044 15.0343V11.8294"
                  stroke="#4A5568"
                  strokeWidth="1.44"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.5044 8.62381C21.5044 5.86411 19.7857 3.915 17.0229 3.915H9.51497C7.54718 3.915 6.1035 4.91032 5.44031 6.48787"
                  stroke="#4A5568"
                  strokeWidth="1.44"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.4793 16.5075H15.2344"
                  stroke="#4A5568"
                  strokeWidth="1.44"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.30432 20.0843C2.30432 18.7579 3.35153 17.1057 6.36757 17.1057C9.38465 17.1057 10.4308 18.7454 10.4308 20.0729"
                  stroke="#4A5568"
                  strokeWidth="1.44"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.77197 12.054C3.77197 13.4873 4.93438 14.6498 6.36768 14.6498C7.80097 14.6498 8.96338 13.4873 8.96338 12.054C8.96338 10.6208 7.80097 9.45938 6.36768 9.45938C5.84181 9.45938 5.3524 9.61572 4.94349 9.88446"
                  stroke="#4A5568"
                  strokeWidth="1.44"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </NavLink>

          <NavLink to={"/websettings"} className="menu_item">
            <div className="menu_item__struct">
              <div className="text">Web settings</div>
              <svg
                className="computer-code"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7595 3.63187H6.98698C4.85173 3.63187 3.12 5.36361 3.12 7.49979V12.738C3.12 14.8741 4.85173 16.6059 6.98698 16.6059H16.5321C18.6682 16.6059 20.4 14.8741 20.4 12.738V7.49979C20.4 5.36361 18.6682 3.63187 16.5321 3.63187H15.8501"
                  stroke="#4A5568"
                  strokeWidth="1.44"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.86422 8.0175L7.78503 10.0977L9.86422 12.1768"
                  stroke="#4A5568"
                  strokeWidth="1.44"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.6556 8.0175L15.7358 10.0977L13.6556 12.1768"
                  stroke="#4A5568"
                  strokeWidth="1.44"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.01343 20.3681H16.5062"
                  stroke="#4A5568"
                  strokeWidth="1.44"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.72902 16.6068L9.11719 20.3674"
                  stroke="#4A5568"
                  strokeWidth="1.44"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.791 16.6068L14.4028 20.3674"
                  stroke="#4A5568"
                  strokeWidth="1.44"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </NavLink>

          <div
            ref={btn_extend_menu}
            to={"/settings"}
            className="menu_item menu_item_settings"
          >
            <div className="menu_item__struct settings">
              <div className="text ">
                <div className="t">Settings</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={9}
                  viewBox="0 0 16 9"
                  fill="none"
                >
                  <path
                    d="M14.6 1.45837L9.16669 6.89171C8.52502 7.53337 7.47502 7.53337 6.83336 6.89171L1.40002 1.45837"
                    stroke="#6F6D6D"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <svg
                className="setting"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.7105 19.5961C14.708 19.088 14.9088 18.6 15.2681 18.2407C15.6274 17.8814 16.1154 17.6806 16.6235 17.6831C16.9451 17.6917 17.2596 17.7797 17.5388 17.9394C18.4516 18.4653 19.6178 18.1543 20.1475 17.2437L20.8066 16.1453C21.0617 15.7075 21.1317 15.186 21.0011 14.6963C20.8706 14.2067 20.5502 13.7893 20.1109 13.5366C19.6717 13.2839 19.3513 12.8665 19.2207 12.3769C19.0902 11.8873 19.1602 11.3658 19.4153 10.9279C19.5812 10.6383 19.8213 10.3982 20.1109 10.2323"
                  stroke="#4A5568"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.81104 5.82036C7.08826 5.9849 7.40401 6.07331 7.72637 6.07666C8.77228 6.07677 9.6244 5.23688 9.63941 4.19107C9.63698 3.68455 9.83649 3.19793 10.1938 2.8389C10.5511 2.47987 11.0368 2.27802 11.5433 2.27803H12.7973C13.3143 2.27782 13.8094 2.48689 14.1698 2.85762C14.5302 3.22836 14.7252 3.72918 14.7103 4.24599C14.7137 4.56835 14.8021 4.8841 14.9666 5.16133C15.2224 5.59747 15.6411 5.91398 16.1305 6.04104C16.6199 6.16811 17.1397 6.0953 17.5753 5.83867C18.4905 5.31427 19.6575 5.62956 20.184 6.54348L20.8065 7.62357V7.63272"
                  stroke="#4A5568"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.20229 6.52518L3.5341 7.62357C3.00817 8.53635 3.31916 9.70257 4.22975 10.2323C4.82166 10.574 5.18629 11.2056 5.18629 11.889C5.18629 12.5725 4.82166 13.204 4.22975 13.5458C3.32031 14.0719 3.00898 15.2353 3.5341 16.1453L4.16568 17.2346C4.4124 17.6797 4.82636 18.0083 5.31595 18.1474C5.80554 18.2865 6.3304 18.2249 6.77438 17.976C7.21084 17.7213 7.73094 17.6515 8.2191 17.7822C8.70725 17.9128 9.12299 18.233 9.37392 18.6716C9.53845 18.9489 9.62686 19.2646 9.63021 19.587C9.63021 20.6435 10.4867 21.5 11.5433 21.5H12.7973"
                  stroke="#4A5568"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.1747 14.5252C13.6306 14.5252 14.8109 13.3449 14.8109 11.889C14.8109 10.4331 13.6306 9.25284 12.1747 9.25284C10.7188 9.25284 9.53857 10.4331 9.53857 11.889C9.53857 13.3449 10.7188 14.5252 12.1747 14.5252Z"
                  stroke="#4A5568"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div ref={extend_menu} className="extend_menu">
            <div className="extend_menu__struct">
              <NavLink to={""} className="extend_menu_item active">
                <div className="text">Administrators</div>
              </NavLink>
              <NavLink to={""} className="extend_menu_item">
                <div className="text">Languages</div>
              </NavLink>
              <NavLink to={""} className="extend_menu_item">
                <div className="text">EndPoints</div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AsideMenu;
