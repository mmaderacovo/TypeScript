"use strict";
class Employee {
    constructor(id, name, dept) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.showInfo();
    }
    showInfo() {
        console.log(`${this.name} ${this.dept}`);
    }
}
const emp = new Employee(1, 'angelica', 'sales');
//# sourceMappingURL=class.js.map