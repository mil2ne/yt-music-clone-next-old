import Image from "next/image";
import React from "react";
import UserIcon from "@/components/UserIcon";
import PagePadding from "@/components/PagePadding";
import { FaChromecast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Logo from "@/components/elements/Logo";
import Navigator from "@/components/elements/Navigator";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const HeaderDrawer = ({ children }) => {
  return (
    <Drawer direction="left">
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="w-[240px] h-full">
        {/* 로고 */}
        {/* 네비게이션 / 재생목록 */}
        <div className="py-3">
          <div className="px-3">
            <Logo />
          </div>
          <Navigator />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

const Header = ({ children }) => {
  return (
    <header className=" relative overflow-y-auto w-full h-full">
      {/* bgSection */}
      <section className=" absolute top-0 w-full">
        <div className=" relative h-[400px] w-full">
          <Image
            alt="mediaItem"
            className="object-cover"
            fill
            src="https://images.unsplash.com/photo-1707833558984-3293e794031c"
          />
          <div className=" absolute h-[400]px top-0 bg-black opacity-40 w-full h-full"></div>
          <div className=" absolute h-[400]px top-0 bg-gradient-to-t from-black w-full h-full"></div>
        </div>
      </section>

      {/* searchSection */}
      <section className=" sticky">
        <PagePadding>
          <div className=" h-[64px] flex flex-row justify-between items-center">
            <article className="h-[42px] min-w-[480px] hidden lg:flex flex-row items-center bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px]">
              <div>
                <FiSearch size={24} />
              </div>
              <input
                className="h-full w-full bg-transparent"
                placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
                type="text"
              />
            </article>
            <HeaderDrawer>
              <article className="lg:hidden">
                <Logo />
              </article>
            </HeaderDrawer>
            <article className="flex flex-row gap-6 items-center">
              <FaChromecast size={26} />
              <UserIcon />
            </article>
          </div>
        </PagePadding>
      </section>
      <section className=" absolute">{children}</section>
    </header>
  );
};

export default Header;
