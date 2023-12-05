"use client"
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [sidebar, setSidebar] = useState(true);

  const onSidebar = () => {
    setSidebar(!sidebar);
  }

  return (
    <main className="flex min-h-screen min-w-[1400px] max-w-[1920px] flex-col p-24">
      <Header sidebar={sidebar} setSidebar={setSidebar} onSidebar={() => onSidebar()} />
      {sidebar &&
        <Sidebar />
      }
    </main>
  )
}
