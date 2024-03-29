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
    padding: 0;
    width: 600px;
    height: 400px;
    border: 2px solid #dbdbdb;
    overflow: hidden;
    & > img {
        width: 100%;
    }
`;

const buttonImg = css`
    margin: 10px;
    padding: 10px;
    width: 600px;
    border: 2px solid #dbdbdb;
`;

function ImageEx() {
    const [ preview, setPreview ] = useState("");
    const fileImageRef = useRef();

    const handleImgFileChange = (e) => {
        const fileReader = new FileReader();

        if(e.target.files.length === 0) {
            return;
        }

        fileReader.onload = (e) => {
            setPreview(e.target.result);
        };

        fileReader.readAsDataURL(e.target.files[0]);
    }

    return (
        <div css={layout}>
            <div css={imageLayout}>
                <img src={preview} alt="" />
            </div>
            <input style={{display: "none"}} type="file" ref={fileImageRef} onChange={handleImgFileChange} />
            <button css={buttonImg} onClick={() => fileImageRef.current.click()}>이미지 불러오기</button>
        </div>
    );
}

export default ImageEx;