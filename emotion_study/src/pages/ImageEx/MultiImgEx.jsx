/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useRef, useState } from "react";

const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const imageLayout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const buttonImg = css`
    margin: 10px;
    padding: 10px;
    width: 600px;
    border: 2px solid #dbdbdb;
`;

function MultiImgEx() {
    const [ setMyImg ] = useState([]);
    const [ preview, setPreview ] = useState([]);
    const fileImageRef = useRef();

    const handleImgFileChange = (e) => {
        const nowSelectMyImgList = e.target.files;
        setMyImg(Array.from(nowSelectMyImgList));

        const nowImgURLList = [];
        for(let i = 0; i < nowSelectMyImgList.length; i++) {
            const fileReader = new FileReader();
            fileReader.onload = function() {
                nowImgURLList[i] = fileReader.result;
                setPreview([...nowImgURLList]);
                fileReader.readAsDataURL(nowSelectMyImgList[i]);
            }
        }
    }

    return (
        <div css={layout}>
            <div css={imageLayout}>
                <ul>
                    {preview.map(myImg => { 
                        <img src={myImg} alt="" />
                    })}
                </ul>
            </div>
            <input style={{display: "none"}} type="file" ref={fileImageRef} onChange={handleImgFileChange} multiple={true} />
            <button css={buttonImg} onClick={() => fileImageRef.current.click()}>이미지 불러오기</button>
        </div>
    );
}

export default MultiImgEx;