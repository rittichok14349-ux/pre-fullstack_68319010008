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
    { id: 102 ,name: "ball", age: 25, major: " ROBLOX" },
    { id: 103 ,name: "kor", age: 205, major: "IT" },

];
//map : แปลงทุกตัวให้ได้ array ใฟม่ในการแสดงผล

const names= studenttList.map((s) =>`${s.id} ชื่อ ${ s.name} อายุ ${s.age} แผนก ${s.major} `);
console.log(`ข้อมูลที่ใช้การ mpa : ${names}`);

//filter : คัดกรองเฉพาะตัวที่เลือกและตรงเงื่อนไข
const isStudents = studenttList.filter((s) => s.major === "IT")
console.log(` กรองข้อมูล ${isStudents.length}` );

//find : หาตัวแรก (ตัวอักษร ตัวเลข)ที่ตรงเงื่อนไข
const found = studenttList.find((s) => s.id === 103);
console.log("ผลการค้นหา" ,found );
console.log(`ผลการค้นหา ${found.name}`);

//คเนหาจากชื่อ ไม่สนพิมพ์เล็กพิมพ์ใหญ่
const keyword = "i";
const searchResult = studenttList.filter((s) => s.major.toLowerCase().includes(keyword.toLocaleLowerCase()));
console.log(`ผลการค้นนหา : ${keyword}`,searchResult.map((s) => s.major));
console.log(`ผลการค้นนหา : ${keyword}`,searchResult);
//ปรับให้ลองค้นหาชื่อสาขา และให้แสดงข้อมูลทั้งหมดที่ตรงกับการพิมพ์ชื่อสาขาแแค่บังอักขระ (keyword : i)