응답데이터_뿌려주기();

function 응답데이터_뿌려주기() {
    const responseData = {
        title: "응답데이터",
        dataList: [
            {
                name: "김응애",
                age: 30
            },
            {
                name: "김응2",
                age: 31
            },
            {
                name: "김응3",
                age: 32
            }
        ]
    };

    console.log(타이틀_컴포넌트(responseData.title));

    for(let i = 0; i<responseData.dataList.length; i++) {
        console.log(테이블_TR_TD_컨포넌트(responseData.dataList[i]));
    }

    for(let 학생 of responseData.dataList) {
        console.log(테이블_TR_TD_컨포넌트(학생));
    }

    // 비구조 할당
    // const 타이틀 = responseData.title;
    // const 학생 = responseData.dataList[0];
    // const 학생들 = responseData.dataList;

    const {title, dataList} = responseData;
    // const {name, age} = dataList[0];
    
    for(let 학생 of dataList) {
        console.log(테이블_TR_TD_컨포넌트(학생, title));
    }
}

function 타이틀_컴포넌트(타이틀) {
    return `
    <h1>${타이틀}</h1>
    `;
}


function 테이블_TR_TD_컨포넌트({name, age}, title) {
    return `
        <tr>
            <td>${name}</td>
            <td>${age}</td>
        </tr>
    `;

}