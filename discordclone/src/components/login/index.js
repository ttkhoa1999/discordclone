import Link from "next/link";
import LogoMobile from "../icons/logo";
import QrCode from "../icons/qrCode";


export default function Login() {
    return (
        <div className={`bg-bgLogin bg-no-repeat w-full h-[100vh] bg-cover flex flex-col justify-center relative`}>
            <div className="w-[130px] h-[36px] absolute left-[60px] top-[30px] hidden md:block">
                <LogoMobile />
            </div>
            <div className="bg-[#313338] w-full h-[100vh] px-[16px] py-[20px] md:max-w-[480px] md:mx-auto md:h-auto md:p-8 lg:flex lg:justify-between lg:max-w-[784px] lg:gap-[60px]">
                <div className="w-full">
                    <div className="w-[130px] h-[36px] mb-[16px] mx-auto md:hidden">
                        <LogoMobile />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="font-semibold text-2xl mb-1 text-[#FFF] text-center">Chào mừng trở lại</h2>
                        <span className="text-[#adb7b3] text-center md:hidden">Rất vui mừng khi được gặp lại bạn!</span>
                    </div>

                    <form className="mt-5">
                        <div className="flex flex-col mb-5">
                            <label className="text-[#b5bac1] uppercase text-xs mb-2 font-bold">Email hoặc Số Điện Thoại <span className="text-red-600 pl-1">*</span></label>
                            <input type="text" className="outline-none w-full bg-[#1e1f22] p-[10px] rounded-[3px] h-[40px] text-[#FFF]"></input>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-[#b5bac1] uppercase text-xs mb-2 font-bold">Mật khẩu<span className="text-red-600 pl-1">*</span></label>
                            <input type="password" className="outline-none w-full bg-[#1e1f22] p-[10px] rounded-[3px] h-[40px] text-[#FFF]"></input>
                        </div>
                        <button className="text-[#2199fc] hover:underline mb-5 text-sm inline-block w-auto mt-1">Quên mật khẩu?</button>
                        <button type="submit" className="w-full px-4 py-[2px] outline-none bg-[#5865f2] text-[#FFF] rounded-[3px] border-none hover:bg-[#4752c4] transition-all duration-200 mb-2 h-[44px]">Đăng nhập</button>
                        <p className="text-[#7d817b] text-sm"> Cần một tài khoản? <Link href={'#'} className="text-[#2199fc] hover:underline">Đăng ký</Link></p>
                    </form>
                </div>
                <div className="min-w-[240px] hidden lg:flex lg:flex-col lg:justify-center lg:items-center">
                    <div className="bg-[#FFF] rounded-[3px] p-2 mb-4">
                    <QrCode/>
                    </div>
                    <h2 className="font-semibold text-2xl mb-1 text-[#FFF] text-center">Đăng nhập bằng mã QR</h2>
                    <span className="text-[#adb7b3] text-center text-sm">Quét bằng <strong>ứng dụng di động Discord</strong> để đăng nhập tức thì</span>
                    <Link href={'#'} className="text-[#2199fc] hover:underline text-sm mt-3"> Hoặc, đăng nhập bằng mã bảo mật</Link>
                </div>
            </div>

        </div>
    )
}