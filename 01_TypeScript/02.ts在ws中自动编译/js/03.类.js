//ts中书写js中的类
(function () {
    //定义一个类
    var Person = /** @class */ (function () {
        function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = firstName + "_" + lastName;
        }
        return Person;
    }());
    //实例对象
    var person = new Person("曹", "阿满");
    console.log(person.fullName);
    function showFullName(person) {
        return person.firstName + "_" + person.lastName;
    }
    console.log(showFullName(person));
})();
