const company = {
    name: "RikkeiSoft",
    location: "Hồ Chí Minh",
    employees: [
        { name: "Nguyễn Văn Luận", position: "Developer" },
        { name: "Nguyễn Văn Hoàng", position: "Tester" },
        { name: "Hoàng Nam Cao", position: "Manager" }
    ]
};
console.log("Tên công ty:", company.name);
company.employees.forEach(employee => {console.log("Tên nhân viên:", employee.name);});
