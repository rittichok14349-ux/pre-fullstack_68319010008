//อาร์เรย์ และ ออบเจคด์

//Array

const students = ["Earth", "Tho", "Silapakorn", "Ood", "Matus"];

console.log(` ก. ทั้งหมด ${students}`);
console.log(` ข. คนแรก ${students[0]}`);
students.push("Mang");
console.log(` ค. หลังเพิ่มข้อมูลใหม่ทำการแสดงผลลัพธ์ที่อัพเดท ${students} จำนวนรายชื่อ ${students.length} คน`);

// object
const student = {
    id: 101,
    name: "Tho",
    age: 20,
    major: "Information Technology",

};
console.log(`Name ${student.name}`);
console.log(`Major ${student.major}`);


// Array and Object
const studenttList = [
    { id: 101 ,name: "tho", age: 20, major: "IT" },
    { id: 102 ,name: "ball", age: 25, major: "IT ROBLOX" },
    { id: 103 ,name: "kor", age: 205, major: "IT PUBG" },

];
//map : แปลงทุกตัวให้ได้ array ใฟม่ในการแสดงผล

const names= studenttList.map((s) =>`${s.id} ชื่อ ${ s.name} อายุ ${s.age} แผนก ${s.major} `);
console.log(`ข้อมูลที่ใช้การ mpa : ${names}`);


