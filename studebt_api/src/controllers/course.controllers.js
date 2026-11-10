const prisma = require('../prisma'); // ถ้า prisma.js export แบบ { prisma } ให้เปลี่ยนเป็น const { prisma } = require('../prisma');

// แปลงค่าเป็นจำนวนเต็ม (ถ้าไม่ส่งมาให้เป็น undefined เพื่อไม่ทับค่าเดิม)
const toInt = (v) => (v === undefined || v === '' ? undefined : parseInt(v, 10));

const buildData = (body) => ({
  code: body.code,
  name: body.name,
  objective: body.objective,
  description: body.description,
  theory: toInt(body.theory),
  practice: toInt(body.practice),
  selfStudy: toInt(body.selfStudy),
  teacher: body.teacher,
});

// GET /api/courses?search=&page=1&limit=10
exports.getCourses = async (req, res) => {
  try {
    const { search, page = 1, limit = 10 } = req.query;
    const pageNum = Math.max(parseInt(page, 10) || 1, 1);
    const limitNum = Math.min(Math.max(parseInt(limit, 10) || 10, 1), 100);

    const where = search
      ? {
          OR: [
            { code: { contains: search } },
            { name: { contains: search } },
            { teacher: { contains: search } },
          ],
        }
      : {};

    const [courses, total] = await Promise.all([
      prisma.course.findMany({
        where,
        orderBy: { code: 'asc' },
        skip: (pageNum - 1) * limitNum,
        take: limitNum,
      }),
      prisma.course.count({ where }),
    ]);

    res.json({
      success: true,
      data: courses,
      pagination: { page: pageNum, limit: limitNum, total, totalPages: Math.ceil(total / limitNum) },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET /api/courses/:id
exports.getCourseById = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) {
      return res.status(400).json({ success: false, message: 'ID ไม่ถูกต้อง' });
    }

    const course = await prisma.course.findUnique({ where: { id } });
    if (!course) {
      return res.status(404).json({ success: false, message: 'ไม่พบรายวิชา' });
    }
    res.json({ success: true, data: course });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// POST /api/courses
exports.createCourse = async (req, res) => {
  try {
    if (!req.body.code || !req.body.name) {
      return res.status(400).json({ success: false, message: 'กรุณาระบุรหัสวิชาและชื่อวิชา' });
    }

    const course = await prisma.course.create({ data: buildData(req.body) });
    res.status(201).json({ success: true, data: course });
  } catch (err) {
    if (err.code === 'P2002') {
      return res.status(409).json({ success: false, message: 'รหัสวิชานี้มีอยู่แล้ว' });
    }
    res.status(500).json({ success: false, message: err.message });
  }
};

// PUT /api/courses/:id
exports.updateCourse = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) {
      return res.status(400).json({ success: false, message: 'ID ไม่ถูกต้อง' });
    }

    const course = await prisma.course.update({
      where: { id },
      data: buildData(req.body),
    });
    res.json({ success: true, data: course });
  } catch (err) {
    if (err.code === 'P2025') {
      return res.status(404).json({ success: false, message: 'ไม่พบรายวิชา' });
    }
    if (err.code === 'P2002') {
      return res.status(409).json({ success: false, message: 'รหัสวิชานี้มีอยู่แล้ว' });
    }
    res.status(500).json({ success: false, message: err.message });
  }
};

// DELETE /api/courses/:id
exports.deleteCourse = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) {
      return res.status(400).json({ success: false, message: 'ID ไม่ถูกต้อง' });
    }

    await prisma.course.delete({ where: { id } });
    res.json({ success: true, message: 'ลบรายวิชาเรียบร้อยแล้ว' });
  } catch (err) {
    if (err.code === 'P2025') {
      return res.status(404).json({ success: false, message: 'ไม่พบรายวิชา' });
    }
    res.status(500).json({ success: false, message: err.message });
  }
};