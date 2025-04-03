const employees = [];

function addEmployee(id, name, position, salary) {
    employees.push({ id, name, position, salary });
    console.log("Employee added successfully.");
}

function deleteEmployeeById(id) {
    const index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
        const confirmDelete = confirm(`Found employee with ID ${id}. Do you want to delete?`);
        if (confirmDelete) {
            employees.splice(index, 1);
            console.log("Employee deleted successfully.");
        } else {
            console.log("Deletion canceled.");
        }
    } else {
        console.log(`No employee found with ID ${id}.`);
    }
}

function updateEmployeeSalaryById(id, newSalary) {
    const employee = employees.find(emp => emp.id === id);
    if (employee) {
        employee.salary = newSalary;
        console.log("Employee salary updated successfully.");
    } else {
        console.log(`No employee found with ID ${id}.`);
    }
}

function searchEmployeeByName(name) {
    const results = employees.filter(emp => emp.name.toLowerCase().includes(name.toLowerCase()));
    if (results.length > 0) {
        console.log("Search results:", results);
    } else {
        console.log(`No employees found with name containing "${name}".`);
    }
}

function showMenu() {
    console.log("1. Add new employee");
    console.log("2. Delete employee by ID");
    console.log("3. Update employee salary by ID");
    console.log("4. Search employee by name");
    console.log("5. Exit");
}

function main() {
    let choice;
    do {
        showMenu();
        choice = parseInt(prompt("Enter your choice:"));
        switch (choice) {
            case 1:
                const id = prompt("Enter ID:");
                const name = prompt("Enter name:");
                const position = prompt("Enter position:");
                const salary = parseFloat(prompt("Enter salary:"));
                addEmployee(id, name, position, salary);
                break;
            case 2:
                const deleteId = prompt("Enter ID to delete:");
                deleteEmployeeById(deleteId);
                break;
            case 3:
                const updateId = prompt("Enter ID to update salary:");
                const newSalary = parseFloat(prompt("Enter new salary:"));
                updateEmployeeSalaryById(updateId, newSalary);
                break;
            case 4:
                const searchName = prompt("Enter name to search:");
                searchEmployeeByName(searchName);
                break;
            case 5:
                console.log("Exiting program.");
                break;
            default:
                console.log("Invalid choice. Please try again.");
        }
    } while (choice !== 5);
}

main();
