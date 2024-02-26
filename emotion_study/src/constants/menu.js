import ImageEx from "../pages/ImageEx/ImageEx";
import ImageEx2 from "../pages/ImageEx/ImageEx2";
import ImageEx3 from "../pages/ImageEx/ImageEx3";
import MultiImgEx from "../pages/ImageEx/MultiImgEx";
import Mypage from "../pages/Mypage/Mypage";

export const MENUS = [
    {
        id: 1,
        path: "/mypage",
        name: "마이페이지",
        element: <Mypage />
    },
    {
        id: 2,
        path: "/board",
        name: "게시판",
        element: <></>
    },
    {
        id: 3,
        path: "/notice",
        name: "공지사항",
        element: <></>
    },
    {
        id: 4,
        path: "/image/ex",
        name: "이미지 불러오기",
        element: <ImageEx3 />
    }
];