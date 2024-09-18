
export default function AvatarOneline({isBottom, isLeft}) {
    return (
        <>
       
        {isBottom &&(
            <div className="flex items-center">
            <div className="w-[32px] h-[32px] rounded-full border-[1px] border-[#313338] relative">
                <img src="/images/be4f49574d335de8686ecf9622e4231c.webp" className="w-full h-full object-cover rounded-full"></img>
                <div className="bg-[#232428] absolute bottom-[-5px] right-[-5px] p-1 rounded-full flex justify-center items-center">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#248046]">

                    </div>
                </div>
            </div>
            <div className="flex flex-col px-2 py-[4px] max-w-[76px]">
                <h2 className="text-[#FFF] truncate text-sm font-semibold ">hihihihoho12</h2>
                <span className="text-xs text-[#adb7b3]">Trực tuyến</span>
            </div>
        </div>
        )}
        {isLeft &&(
                <div className="flex items-center px-2 py-2">
                <div className="w-[32px] h-[32px] rounded-full border-[1px] border-[#313338] relative">
                    <img src="/images/be4f49574d335de8686ecf9622e4231c.webp" className="w-full h-full object-cover rounded-full"></img>
                    <div className="bg-[#232428] absolute bottom-[-5px] right-[-5px] p-1 rounded-full flex justify-center items-center">
                        <div className="w-[10px] h-[10px] rounded-full bg-transparent border-2 border-[#adb7b3]">
    
                        </div>
                    </div>
                </div>
                <div className="flex flex-col px-2 py-[4px]">
                    <h2 className="text-[#adb7b3] truncate text-sm ">hihihihoho12</h2>
                </div>
            </div>
        )}
        </>
    )
}

