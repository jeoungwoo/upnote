"use client";
import React, { useState } from "react";

import Image from 'next/image';
import Menu from '@/public/icons/menu.webp';
import LeftArrow from '@/public/icons/left-arrow.webp';
import RightArrow from '@/public/icons/right-arrow.webp';

/* eslint-disable jsx-a11y/alt-text */
export const Header = (props) => {
  const { sidebar, onSidebar } = props;

  const [hide, setHide] = useState(true);
  const menu = "flex gap-5";

  const handleDropdown = () => {
    setHide(!hide);
  }

  return (
    <div className="flex w-full justify-between">
      <div className={menu}>
        <div>
          {sidebar ?
            <Image src={Menu} alt="Hide sidebar" />
          :
            <Image src={Menu} alt="Hide sidebar" />
          }
        </div>
        <div>
          <Image src={LeftArrow} alt="Back" />
        </div>
        <div>
          <Image src={RightArrow} alt="Forward" />
        </div>
        <div>search</div>
      </div>
      <div className={menu}>
        <div>new note</div>
        <div>board</div>
        <div>setting</div>
      </div>
    </div>
  );
};