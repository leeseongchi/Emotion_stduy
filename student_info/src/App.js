import { useEffect, useRef, useState } from "react";
import InfoInput from "./components/InfoInput";
import StudentInfo from "./components/StudentInfo";
import InfoButtons from "./components/InfoButtons";

function App() {
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [address, setAddress] = useState("");

  const studentObj = useState({
    name: "",
    age: "",
    address: ""
  })

  const [student, setStudent] = useState({studentObj})
  const [inputValues, setInputValues] = useState({studentObj})
  const InputRef = {
    name: useRef(),
    age: useRef(),
    address: useRef()
  }

  const [refresh, setRefrash] = useState(false);

  useEffect(() => {
    console.log(InputRef)
  })


  // userEffect - [student]의 상태가 변한 경우 setInputValues(비동기)를 작동시키기 위함
  useEffect(() => {
    if(refresh){
      setInputValues(studentObj)
    }
    setRefrash(true);
  }, [student]);

  /*
  let email = "nanana@nanana.com"
  let phone = "00012345678"

  let user = {
    username: "test",
    ["password"]: "1234",
    [email]: "test",
    phone
  }
  
  js 객체 특징
  1. 키값은 문자열이어도 된다.
  2. 변수의 문자열 값을 키값으로 쓰고 싶을 때 []대괄호로 묶어서 참조할 수 있다.
  3. 변수명만 입력하면 객체의 속성과 value로 한번에 정의할 수 있다.
  */


  const handleInputChange = (e) => {
    const { name, value } = e.target

    setInputValues({
      ...inputValues,
      [name]: value
    });
  }

  const handleOnOk = () => {
    setInputValues(inputValues);
  }

  const handleOnClead = () => {
    setStudent(studentObj);
  }


  return (
    <>
    <StudentInfo title="이름" text={student.name} />
    <StudentInfo title="나이" text={student.age} />
    <StudentInfo title="주소" text={student.address} />
    {/* <h1>이름: {student.name}</h1>
    <h1>나이: {student.age}</h1>
    <h1>주소: {student.address}</h1> */}

    <InfoInput 
      name={'name'}
      onChange={handleInputChange}
      value={inputValues.name}
      placeholder='이름'
      inputRef={InputRef.name}
      />

    <InfoInput 
      name={'age'}
      onChange={handleInputChange}
      value={inputValues.name}
      placeholder='나이'
      inputRef={InputRef.age}
      />

    <InfoInput 
      name={'address'}
      onChange={handleInputChange}
      value={inputValues.name}
      placeholder='주소'
      inputRef={InputRef.address}
      />

    {/* <input type="text" 
      name='name' 
      onChange={handleInputChange} 
      value={inputValues.name} 
      placeholder="이름"/>

    <input type="text" 
      name='age' 
      onChange={handleInputChange}
      value={inputValues.age} 
      placeholder="나이"/>

    <input type="text" 
      name='address' 
      onChange={handleInputChange} 
      value={inputValues.address} 
      placeholder="주소"/> */}

    <InfoButtons>
      <button onClick={handleOnOk}>확인</button>
      <button onClick={handleOnClead}>비우기</button>
    </InfoButtons>
    </>
  );
}

export default App;
