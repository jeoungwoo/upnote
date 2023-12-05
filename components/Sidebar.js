"use client";
import React, { useEffect, useState } from "react";

import Image from 'next/image';
import DownArrow from '@/public/icons/down-arrow.webp';
import RightArrow from '@/public/icons/right-arrow.webp';

/* eslint-disable jsx-a11y/alt-text */
export const Sidebar = () => {
  const [hide, setHide] = useState(true);

  const selectedStyle = "bg-gray-300";

  const filter = ['할 일', '오늘', '미분류', '공유 노트', '동기화되지 않음', '단어가 포함 된 노트'];
  const filterList = filter.map((el) => {
    <div>{el}</div>
  })

  const handleDropdown = () => {
    setHide(!hide);
  }

  return (
    <div>
      <div className={`flex gap-3 w-28 ${selectedStyle}`}>
        {hide ? 
          <div onClick={handleDropdown}>
            <Image alt="All note open" src={DownArrow} />
          </div>
        :
          <div onClick={handleDropdown}>
            <Image alt="All note close" src={RightArrow} />
          </div>
        }
        <div className={selectedStyle} >모든 노트</div>
      </div>
      {hide &&
        filterList
      }
    </div>
  );
};