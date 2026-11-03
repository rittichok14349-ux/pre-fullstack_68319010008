const prisma = require("../prisma");

exports.getAllStudents = async (req, res) => {
    try {
        const search = req.query.search || "";
        const students = await prisma.student.findMany({
            where: { name: {contains: search}},
            orderBy: { id: "asc"},
        });
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: "Error"});
    }
}

//ดึงข้อมูลรายคน
exports.getStudentsById = async (req, res) => {
    try{
        const id = Number(req.params.id);
        const student = await prisma.student.findUnique({
            where: {id}
        }); if (!student) {
            return res.status(404).json({ message: 'Students not found' });
        }
        res.json(student);
    } catch {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.createStudent = async (req, res) => {
    try{
        const { name, age, major } = req.body; 
        if (!name || !age || !major) {
            return res.status(400).json( {message : 'Please Field Information' } );

        }
        const newStudent = await prisma.student.create({
            data:{name, age: Number(age),major},
        });
        res.status(201).json(newStudent);

    } catch {
        res.status(500).json( {message : 'Fail'});
    }
};
exports.updateStudent = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { name, age, major } = req.body;

        const student = await prisma.student.findUnique({ where: { id } });
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        const updatedStudent = await prisma.student.update({
            where: { id },
            data: { name, age: Number(age), major },
        });
        res.json(updatedStudent);
    } catch {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const student = await prisma.student.findUnique({ where: { id } });
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        await prisma.student.delete({ where: { id } });
        res.json({ message: `ลบนักศึกษารหัส ${id} สำเร็จ` });
    } catch {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};