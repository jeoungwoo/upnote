"use client";
import React, { useState } from "react";

import Image from 'next/image';
import Menu from '@/public/icons/menu.webp';
import LeftArrow from '@/public/icons/left-arrow.webp';
import RightArrow from '@/public/icons/right-arrow.webp';
import Setting from '@/public/icons/settings.webp';

/* eslint-disable jsx-a11y/alt-text */
export const Header = (props) => {
  const { sidebar, onSidebar } = props;

  const [hide, setHide] = useState(true);
  const menu = "flex gap-5 items-center";
  const menuSize = "w-6 h-6";
  const arrowSize = "w-4 h-4 flex align-center";
  const iconSize = "w-4 h-6";

  const handleDropdown = () => {
    setHide(!hide);
  }

  return (
    <div className="flex w-full justify-between">
      <div className={menu}>
        <div className={menuSize} onClick={onSidebar}>
          {sidebar ?
            <Image src={Menu} alt="Hide sidebar" priority />
          :
            <Image src={Menu} alt="Hide sidebar" priority />
          }
        </div>
        <div className={arrowSize}>
          <Image src={LeftArrow} alt="Back" />
        </div>
        <div className={arrowSize}>
          <Image src={RightArrow} alt="Forward" />
        </div>
        <div>Search Input</div>
      </div>
      <div className={menu}>
        <div>new note</div>
        <div className={menuSize}>
          <Image src={Setting} alt="Setting" />
        </div>
      </div>
    </div>
  );
};