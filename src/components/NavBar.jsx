import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ModalForm from "./ModalForm";

// -----------------------쿠키------------------------------

import { getCookie, removeCookie } from "../shared/cookies";

// -----------------------아이콘, 이미지------------------------------

import instagramLogo from "../assets/img/instagramLogo.png";
import Profile from "../assets/img/Profile.jpg";
import { MdHomeFilled } from "react-icons/md";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { CgAddR } from "react-icons/cg";
import { TiCompass } from "react-icons/ti";
import { BiHeart } from "react-icons/bi";
import { CgSearch } from "react-icons/cg";
import { MdOutlineLogout } from "react-icons/md";

const NavBar = () => {
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);
  const [user, setUser] = useState("");
  const ModalHandler = () => {
    setIsModal(!isModal);
  };
  const logoClick = () => {
    navigate("/");
  };

  const ProfileClick = () => {
    navigate("/mypage");
  };

  const onClickLogoutHandler = () => {
    removeCookie("token");
    removeCookie("userName");
    alert("로그아웃 되었습니다");
    navigate("/login");
    window.location.reload();
  };

  return (
    <StNav>
      <StNavContainer>
        <StLogo onClick={logoClick}>
          <img src={instagramLogo} alt="로고" style={{ width: "100px" }} />
        </StLogo>
        <StSearch>
          <StSearchThings>
            <CgSearch />
            {/* <StInput/> */}
          </StSearchThings>
        </StSearch>
        <Icons>
          <IconMdHomeFilled
            onClick={() => {
              navigate("/");
            }}
          >
            <MdHomeFilled size="28" />
          </IconMdHomeFilled>
          <IconHiOutlinePaperAirplane>
            <HiOutlinePaperAirplane size="25" />
          </IconHiOutlinePaperAirplane>
          <IconCgAddR onClick={ModalHandler}>
            <CgAddR size="27" />
          </IconCgAddR>
          {isModal ? <ModalForm ModalHandler={ModalHandler} /> : null}

          <IconTiCompass>
            <TiCompass size="32" />
          </IconTiCompass>
          <IconBiHeart>
            <BiHeart size="26" />
          </IconBiHeart>
          <IconMdOutlineLogout onClick={onClickLogoutHandler}>
            <MdOutlineLogout size="26" />
          </IconMdOutlineLogout>
          <ProfileImg onClick={ProfileClick} />
        </Icons>
      </StNavContainer>
    </StNav>
  );
};

export default NavBar;

const StNav = styled.div`
  width: 100%;
  height: 60px;
  background-color: #fff;
  align-items: center;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  top: 0;
  width: 100%;
  position: fixed;
  z-index: 2;
`;

const StNavContainer = styled.div`
  margin: auto 0;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  width: 100%;
  z-index: 1;
  max-width: 975px;
  justify-content: space-between;
`;

const StLogo = styled.div`
  display: block;
  position: relative;
`;

const StSearch = styled.div`
  background-color: #eee;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  border-radius: 8px;
  height: 30px;
  width: 250px;
`;

const StSearchThings = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 8px 0;
`;

// const StInput = styled.StInput.attrs({
//     placeholderTextColor: "grey",
// })`
//   background-color: white;

//   border-radius: 15px;
//   padding: 5px 10px;
//   font-size: 18px;
// `;

const Icons = styled.div`
  box-sizing: border-box;
  display: flex;
  position: relative;
`;

const IconMdHomeFilled = styled.div`
  display: block;
  position: relative;
  color: #000000;
  cursor: pointer;
`;
const IconHiOutlinePaperAirplane = styled.div`
  display: block;
  position: relative;
  margin-left: 24px;
  cursor: pointer;
`;
const IconCgAddR = styled.div`
  display: block;
  position: relative;
  margin-left: 24px;
  color: #000000;
  cursor: pointer;
`;
const IconTiCompass = styled.div`
  display: block;
  position: relative;
  margin-left: 24px;
  color: #000000;
  cursor: pointer;
`;
const IconBiHeart = styled.div`
  display: block;
  position: relative;
  margin-left: 24px;
  color: #000000;
  cursor: pointer;
`;

const IconMdOutlineLogout = styled.div`
  display: block;
  position: relative;
  margin-left: 24px;
  margin-right: 24px;
  color: #000000;
  cursor: pointer;
`;

const ProfileImg = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${Profile});
  background-position: center;
  background-size: 100% 100%;
  margin: 0 auto;
`;

const OutButton = styled.button`
  background-color: white;
  border: none;
  margin-left: 10px;
  font-size: 14px;
`;
