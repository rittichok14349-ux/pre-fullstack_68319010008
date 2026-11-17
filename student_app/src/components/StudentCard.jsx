import React from 'react'

const StudentCard = (props) => {
    return (
        
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col gap-1">
          <h3 className="text-lg font-bold text-blue-600">{props.name}</h3>
          <p className="text-sm text-slate-600">รหัส: {props.id}</p>
          <p className="text-sm text-slate-600">อายุ: {props.age} ปี</p>
          <p className="text-sm text-slate-600">สาขา: {props.major}</p>

        <div className="flex gap-2 mt-3">
                    <button
                        type="button"
                        onClick={props.onEdit}
                        className="flex-1 bg-amber-400 hover:bg-amber-500 rounded-lg py-2"
                    >
                        แก้ไข
                    </button>
                    <button
                        type="button"
                        onClick={props.onDelete}
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-lg py-2"
                    >
                        ลบ
                    </button>
                </div>
        </div>
    )
}

export default StudentCard