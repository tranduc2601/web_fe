const tasks = [];

function addTask(id, name, description, startTime, status) {
    tasks.push({ id, name, description, startTime, status });
}

function displayTasks() {
    console.log("Danh sách công việc:");
    tasks.forEach(task => {
        console.log(`ID: ${task.id}, Tên: ${task.name}, Mô tả: ${task.description}, Thời gian bắt đầu: ${task.startTime}, Trạng thái: ${task.status}`);
    });
}

function updateTaskStatus(id, newStatus) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.status = newStatus;
        console.log(`Cập nhật trạng thái công việc ID ${id} thành công.`);
    } else {
        console.log(`Không tìm thấy công việc với ID ${id}.`);
    }
}

function filterTasksByStatus(status) {
    return tasks.filter(task => task.status === status);
}

function sortTasksByStatus() {
    tasks.sort((a, b) => a.status.localeCompare(b.status));
    console.log("Sắp xếp công việc theo trạng thái thành công.");
}

function mainMenu() {
    let choice;
    do {
        console.log("\nChương trình quản lý công việc:");
        console.log("1. Thêm công việc mới.");
        console.log("2. Hiển thị tất cả các công việc.");
        console.log("3. Cập nhật trạng thái công việc theo id.");
        console.log("4. Lọc các công việc theo trạng thái hoàn thành, chưa hoàn thành.");
        console.log("5. Sắp xếp các công việc theo trạng thái công việc.");
        console.log("6. Thoát.");
        choice = parseInt(prompt("Nhập lựa chọn của bạn: "));

        switch (choice) {
            case 1:
                const id = prompt("Nhập ID công việc: ");
                const name = prompt("Nhập tên công việc: ");
                const description = prompt("Nhập mô tả công việc: ");
                const startTime = prompt("Nhập thời gian bắt đầu: ");
                const status = prompt("Nhập trạng thái công việc (hoàn thành/chưa hoàn thành): ");
                addTask(id, name, description, startTime, status);
                break;
            case 2:
                displayTasks();
                break;
            case 3:
                const updateId = prompt("Nhập ID công việc cần cập nhật: ");
                const newStatus = prompt("Nhập trạng thái mới (hoàn thành/chưa hoàn thành): ");
                updateTaskStatus(updateId, newStatus);
                break;
            case 4:
                const filterStatus = prompt("Nhập trạng thái cần lọc (hoàn thành/chưa hoàn thành): ");
                const filteredTasks = filterTasksByStatus(filterStatus);
                console.log("Các công việc theo trạng thái:");
                filteredTasks.forEach(task => {
                    console.log(`ID: ${task.id}, Tên: ${task.name}, Mô tả: ${task.description}, Thời gian bắt đầu: ${task.startTime}, Trạng thái: ${task.status}`);
                });
                break;
            case 5:
                sortTasksByStatus();
                break;
            case 6:
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");
        }
    } while (choice !== 6);
}

mainMenu();
