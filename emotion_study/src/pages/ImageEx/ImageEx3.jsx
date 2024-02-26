/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useRef, useState } from "react";
import { storage } from "../../configs/firebase/firebaseConfig";
import { Line } from "rc-progress";
import { v4 as uuid } from "uuid" 

const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const imageLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    border: 1px solid #dbdbdb;
    width: 300px;
    height: 300px;
    overflow: hidden;
    & > img {
        width: 100%;
    }
`;

function ImageEx3() {
    const [ url, setURL ] = useState("");
    const [ urls, setURLS ] = useState([]);
    const [ uploadFiles, setUploadFiles ] = useState([]);
    const [ previews, setPreviews ] = useState([]);
    const [ progressPercent, setProgressPercent ] = useState(0);
    const [ progressPercents, setProgressPercents ] = useState([]);
    const imgFileRef = useRef();

    useEffect(() => {
        setURLS(!localStorage.getItem("urls") ? [] : JSON.parse(localStorage.getItem("urls")));
    }, []);
    
    const handleFileChange = (e) => {
        
        // fileList배열을 일반배열로 바꾸는 방법
        const files = Array.from(e.target.files);

        if(files.length === 0) {
            imgFileRef.current.value = "";
            return;
        }
        
        setUploadFiles(files);

        let promises = [];

        // 예제
        // let ps = [
        //     new Promise(resolve => resolve(1)),
        //     new Promise(resolve => resolve(2)),
        //     new Promise(resolve => resolve(3))
        // ];
            
        // 여러개의 Promise를 비동기로 실행시킬 때 .all 을 쓴다.
        // Promise.all(ps).then(result => console.log(result));
            
            
        // map으로도 할 수가 있다.
        promises = files.map(file => new Promise((resolve) => {
            const fileReader = new FileReader();
                
            fileReader.onload = (e) => {
                resolve(e.target.result);
            }
                
            fileReader.readAsDataURL(file);
        }));
        

        // 정의만 한다.
        // for(let file of e.target.files) {
        //     promises = [...promises, new Promise((resolve) => {
        //         const fileReader = new FileReader();
        
        //         fileReader.onload = (e) => {
        //             console.log(e.target.result);
        //             resolve(e.target.result);
        //         }
    
        //         fileReader.readAsDataURL(file);
        //     })];
        // }

        // Promise.all 로 실행한다.
        Promise.all(promises)
        .then(result => {
            setPreviews(result);
        });

    }

    const handleImageUpload = () => {
        const file = uploadFiles[0];
        console.log(uploadFiles);
        const storageRef = ref(storage, `files/test/${uuid() + file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                setProgressPercent(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100))
            },
            (error) => {},
            () => {
                getDownloadURL(storageRef).then(url => {
                    localStorage.setItem("url", url); 
                    setURL(url);
                    setPreviews([]);
                })
            }
        );
    }
    
    const handleImageUpload2 = () => {
        uploadPromise = uploadFiles.map(file => new Promise(resolve => {
    
            console.log(uploadFiles);
            const storageRef = ref(storage, `files/test/${uuid() + file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);
            resolve(uploadTask);
        }));
    
        Promise.all(uploadPromise)
        .then(result => {
            JSON.parse(localStorage.setItem("urls", urls));
            setURL(result);
            setPreviews([]);
        });
    }

    return (
        <div css={layout}>
            {urls.map(url => 
            <>
                <div key={url} css={imageLayout}>
                    <img src={url} alt="" />
                </div>
                <Line percent={parseInt(progressPercents)} strokeWidth={4} strokeColor={"#dbdbdb"} />
            </>
            )}
            {previews.map((preview, index) =>
                <>
                    <div key={index} css={imageLayout}>
                        <img src={preview} alt="" />
                    </div>
                    <Line percent={progressPercent} strokeWidth={4} strokeColor={"#dbdbdb"}/>
                </>
            )}
            <input style={{display: "none"}} type="file" multiple={true} ref={imgFileRef} onChange={handleFileChange} />
            <button onClick={() => imgFileRef.current.click()}>이미지 불러오기</button>
            <button onClick={handleImageUpload2}>이미지 업로드</button>
        </div>
    );
}

export default ImageEx3;