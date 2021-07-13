//接口: 是一种能力 一种约束
(function () {
    function showFullName(person) {
        return person.firstName + "_" + person.lastName;
    }
    var person = {
        firstName: "Bi",
        lastName: "Jizhuang"
    };
    console.log(showFullName(person));
})();
