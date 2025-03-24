import React, { useState } from 'react';
import '../assets/css/NailTechDashboard.css'

const NailTechDashboard = () => {
    // Dữ liệu cứng (mock data) cho các job
    const initialJobs = [
        { id: 1, customerName: "Ngô Thị Khánh Linh", service: "Sơn móng tay", status: "pending" },
        { id: 2, customerName: "Pink Quân", service: "Đắp móng gel", status: "in_progress" },
        { id: 3, customerName: "Ngô Linh", service: "Vẽ nail nghệ thuật", status: "completed" },
    ];

    const [jobs, setJobs] = useState(initialJobs);

    const handleStatusUpdate = (jobId, newStatus) => {
        // Cập nhật trạng thái của job trong danh sách
        const updatedJobs = jobs.map(job =>
            job.id === jobId ? { ...job, status: newStatus } : job
        );
        setJobs(updatedJobs);
    };

    return (
        <div className="nail-tech-dashboard">
            <h1>Dashboard của Thợ Làm Nail</h1>
            <table>
                <thead>
                    <tr>
                        <th>Job ID</th>
                        <th>Tên Khách Hàng</th>
                        <th>Dịch Vụ</th>
                        <th>Trạng Thái</th>
                        <th>Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map(job => (
                        <tr key={job.id}>
                            <td>{job.id}</td>
                            <td>{job.customerName}</td>
                            <td>{job.service}</td>
                            <td>{job.status}</td>
                            <td>
                                <select
                                    value={job.status}
                                    onChange={(e) => handleStatusUpdate(job.id, e.target.value)}
                                >
                                    <option value="pending">Chờ xử lý</option>
                                    <option value="in_progress">Đang thực hiện</option>
                                    <option value="completed">Hoàn thành</option>
                                    <option value="cancelled">Đã hủy</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default NailTechDashboard;