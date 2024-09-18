
import IconFriend from "@/components/icons/Iconfriend";
import NewGroup from "@/components/icons/newGroup";
import NewMess from "@/components/icons/newMess";
import SvgOnline from "@/components/icons/svgOnline";
import AvatarLeft from "@/components/layouts/avatarLeft";
import Login from "@/components/login";
import Help from "@/components/icons/help";
import IconSetting from "@/components/icons/Iconsetting";
import IconNitro from "@/components/icons/IconNitro";
import IconShop from "@/components/icons/IconShop";
import IconPlus from "@/components/icons/IconPlus";
import AvatarOneline from "@/components/layouts/avatarOnline";

export default function Home() {
  return (
    <>
      {/* <Login/> */}
      <div className="flex justify-between">
        <div className="left-site bg-[#1e1f22] min-w-[72px] pt-3 h-[100vh]">
          <ul className="nav-left flex flex-col items-center">
            <li className="active flex justify-center items-center w-full mb-2"><div className="w-[48px] h-[48px] rounded-full relative cursor-pointer bg-[#5865f2] flex justify-center items-center" title="Tin nhắn trực tiếp">
              <SvgOnline />
            </div><div class="line-check"></div></li>
            <AvatarLeft />
            <AvatarLeft />
            <AvatarLeft />
            <AvatarLeft />
            <AvatarLeft />
            <AvatarLeft />
            <AvatarLeft />
            <AvatarLeft />
            <AvatarLeft />
            <AvatarLeft />
            <AvatarLeft />
            <AvatarLeft />
            <AvatarLeft />
            <AvatarLeft />
          </ul>
        </div>
        <div className="right-site w-full h-[100vh]">
          <div className="grid grid-cols-12 w-full">
            <div className="col-span-2 p-[10px]  bg-[#2b2d31] shadow-discord">
              <input type="tex" className="outline-none border-none bg-[#1e1f22] py-[1px] px-[6px] text-sm rounded-[3px] w-full" placeholder="Tìm hoặc bắt đầu cuộc trò chuyện"></input>
            </div>
            <div className="col-span-10 p-[10px] shadow-discord flex justify-between items-center bg-[#313338]">
              <div className="left flex">
                <ul className="flex items-center">
                  <li><div className="w-[24px] h-[24px] mx-2">
                    <IconFriend />
                  </div></li>
                  <li><span className="text-[#FFF] font-semibold mr-2 text-sm">Bạn bè</span></li>
                  <li>
                    <div className="mx-2 w-[1px] h-[24px] bg-[#adb7b3]"></div>
                  </li>

                </ul>
                <ul className="tab-bar flex items-center">
                  <li className="active mx-2 px-2 py-[1px] rounded-[4px] text-[#adb7b3] text-sm ">Trực tuyến</li>
                  <li className="mx-2 px-2 py-[1px] rounded-[4px] text-[#adb7b3] text-sm ">Tất cả</li>
                  <li className="mx-2 px-2 py-[1px] rounded-[4px] text-[#adb7b3] text-sm ">Đang chờ xử lý</li>
                  <li className="mx-2 px-2 py-[1px] rounded-[4px] text-[#adb7b3] text-sm ">Đã chặn</li>
                  <li className="mx-2 "><button className="px-2 py-[2px] rounded-[4px] text-sm  outline-none border-none text-[#FFF] bg-[#248046]">Thêm bạn</button> </li>

                </ul>
              </div>
              <ul className="tool-bar flex items-center">
                <li><div className="w-[24px] h-[24px] mx-2 cursor-pointer">
                  <NewGroup />
                </div></li>
                <li>
                  <div className="mx-2 w-[1px] h-[24px] bg-[#adb7b3]"></div>
                </li>
                <li><div className="w-[24px] h-[24px] mx-2 cursor-pointer">
                  <NewMess />
                </div></li>
                <li><div className="w-[24px] h-[24px] mx-2 cursor-pointer">
                  <Help />
                </div></li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-12 bg-[#313338] w-full grid-second">
            <div className="col-span-2 relative bg-[#2b2d31]">
              <div className="left-mess px-2">
                <ul className="tab-site flex flex-col my-2">
                  <li className="active p-2 rounded-[3px] py-1 cursor-pointer"><div className="flex items-center "><div className="w-[24px] h-[24px] mr-3">
                    <IconFriend />
                  </div>
                    <span className="text-[#FFF] mr-2 text-sm">Bạn bè</span></div></li>
                    <li className=" p-2 rounded-[3px] py-1 cursor-pointer"><div className="flex items-center "><div className="w-[24px] h-[24px] mr-3">
                    <IconNitro />
                  </div>
                    <span className="text-[#adb7b3] mr-2 text-sm">Nitro</span></div></li>
                    <li className=" p-2 rounded-[3px] py-1 cursor-pointer"><div className="flex items-center "><div className="w-[24px] h-[24px] mr-3">
                    <IconShop />
                  </div>
                    <span className="text-[#adb7b3] mr-2 text-sm">Cửa hàng</span></div></li>
                </ul>
                <div className="flex items-center w-full justify-between pt-[18px] pb-[4px] px-2">
                    <h2 className="text-[#adb7b3] uppercase text-xs font-semibold">Tin nhắn trực tiếp</h2>
                    <div className="w-[16px] h-[16px] cursor-pointer hover:opacity-70 transition-all duration-200">
                      <IconPlus></IconPlus>
                    </div>
                </div>
                <AvatarOneline isBottom={false} isLeft={true}></AvatarOneline>
                <AvatarOneline isBottom={false} isLeft={true}></AvatarOneline>
                <AvatarOneline isBottom={false} isLeft={true}></AvatarOneline>
                <AvatarOneline isBottom={false} isLeft={true}></AvatarOneline>
                <AvatarOneline isBottom={false} isLeft={true}></AvatarOneline>
                <AvatarOneline isBottom={false} isLeft={true}></AvatarOneline>
                <AvatarOneline isBottom={false} isLeft={true}></AvatarOneline>
                <AvatarOneline isBottom={false} isLeft={true}></AvatarOneline>
                <AvatarOneline isBottom={false} isLeft={true}></AvatarOneline>
                <AvatarOneline isBottom={false} isLeft={true}></AvatarOneline>
                <AvatarOneline isBottom={false} isLeft={true}></AvatarOneline>
                <AvatarOneline isBottom={false} isLeft={true}></AvatarOneline>
              </div>
              <div className="flex justify-between items-center absolute bottom-0 w-full bg-[#232428] p-2">
                <AvatarOneline isBottom={true} isLeft={false}></AvatarOneline>
                <div className="flex items-center justify-center w-[32px] h-[32px] cursor-pointer hover:bg-[#656766] transition-all duration-200 setting hover:rounded-[4px] ">
                  <IconSetting />
                </div>
              </div>
            </div>
            <div className="col-span-7 ">
              <div className="flex flex-col gap-10 justify-center items-center max-w-[421px] h-full mx-auto">
                <img src="/images/dcbf373925d18e337c98.svg" className="w-full object-contain"></img>
                <span className="text-[#adb7b3] text-sm">Chả có ai chơi với Wumpus cả?</span>
              </div>
            </div>
            <div className="col-span-3 overflow-hidden">
              <div className="p-[16px] border-l-[1px] border-[#3a3c42] h-full">
                <h2 className="text-[#FFF] capitalize text-xl mt-2 mb-4 font-semibold">Đang hoạt động</h2>
                <div className="notify p-4 flex flex-col justify-center items-center text-center">
                  <h2 className="text-[#FFF] font-semibold">Hiện tại không có cập nhật mới nào cả…</h2>
                  <span className="text-sm text-[#adb7b3]">Nếu bạn bè của bạn có hoạt động mới, ví dụ như chơi game hoặc trò chuyện thoại, chúng tôi sẽ hiển thị hoạt động đó ở đây!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  );
}
