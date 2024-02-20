const slime = {
    name: "slime"
};

const cuteSlime = {
    ...slime,
    attribute: "cute"
};

const purprleCuteSlime = {
    ...cuteSlime,
    color: "purple"
};

const renameSlime = {
    ...cuteSlime,
    name: "슬라임2"
}

console.log(slime);
console.log(cuteSlime);
console.log(purprleCuteSlime);
console.log(renameSlime);


// 배열 spread

const nums = [1, 2, 3, 4, 5];
const nums2 = [...nums, 6, 7, 8, 9, 10];
const nums3 = [...(nums2.filter(n => n % 2 === 0)), 11, 12, 13, 14, 15]

console.log(nums);
console.log(nums2);
console.log(nums3);

const users = [
    {
        id: 1,
        name: "김응애"
    },
    {
        id: 2,
        name: "김응애2"
    },
    {
        id: 3,
        name: "김응애3"
    },
    {
        id: 4,
        name: "김응애4"
    }
];

const evenUsers = [
    // user.id가 짝수인 객체만 복사
    ...(users.filter(user => user.id % 2 === 0)),
    // id: 5 추가 생성
    {id: 5, name: "김응애5"}
]

console.log(evenUsers);