import React from 'react'

const StudentFrom = (props) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-6">
      <h2 className="text-lg font-bold mb-3">
        {props.editingId ? `แก้ไขข้อมูลรหัส ${props.editingId}` : 'เพิ่มนักศึกษา'}
      </h2>

      <form onSubmit={props.onSubmit} className="flex flex-col gap-2">
        <div className="flex flex-col md:flex-row gap-2">
          <input
            type="text"
            className="flex-1 border border-slate-300 rounded-lg px-3 py-2"
            placeholder="ชื่อนักศึกษา"
            value={props.name}
            onChange={(e => props.setName(e.target.value))}
          />
          <input
            type="number"
            className="md:w-28 border border-slate-300 rounded-lg px-3 py-2"
            placeholder="อายุ"
            value={props.age}
            onChange={(e => props.setAge(e.target.value))}
          />
          <input
            type="text"
            className="flex-1 border border-slate-300 rounded-lg px-3 py-2"
            placeholder="สาขาวิชา"
            value={props.major}
            onChange={(e => props.setMajor(e.target.value))}
          />
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            className={`flex-1 text-white rounded-lg py-2 ${
              props.editingId
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {props.editingId ? 'บันทึกการแก้ไข' : 'เพิ่มนักศึกษา'}
          </button>

          {props.editingId && (
            <button
              type="button"
              onClick={props.onCancel}
              className="bg-slate-500 hover:bg-slate-600 text-white rounded-lg px-4 py-2"
            >
              ยกเลิก
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default StudentFrom