import { css } from "@emotion/react";

export const layout = (isShow) => css`
    box-sizing: border-box;
    position: fixed;
    top: ${isShow ? "0px" : "-80px"};
    right: 0;
    z-index: 99;
    border: 1px solid #dbdbdb;
    border-top: 0;
    width: 50%;
    height: 80px;
    transition: top 0.5s ease-in-out;
    background-color: white;
    box-shadow: 1px 0px 2px #00000022;
`;

export const toggleButton = css`
    box-sizing: border-box;
    position: absolute;
    transform: translateX(-50%);
    right: 0;
    bottom: -15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    border: 1px solid #dbdbdb;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    width: 50px;
    height: 15px;
    background-color: white;
    cursor: pointer;
    &:hover {
        background-color: #eee;
    }
    &:active {
        background-color: #ccc;
    }
`;

export const menuList = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
`;

export const menuItem = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 20px;
    border: 1px solid #dbdbdb;
    width: 50%;
    height: 30px;
    color: black;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        background-color: #eee;
    }
    &:active {
        background-color: #dbdbdb;
    }
`;