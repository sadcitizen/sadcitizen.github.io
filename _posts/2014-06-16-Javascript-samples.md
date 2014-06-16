---
layout: post
title: Примеры кода на javascript
excerpt: "Простые пример кода на js, предназначенные для тестирования подсветки синтаксиса для листингов"
---

## Паттерн "Цепочка обязаностей / Chain of Responsibility"

{% highlight js %}
/**
 * Цепочка обязаностей / Chain of Responsibility
 * */
var TodoList = (function () {

    /**
     * Создает экземпляр TodoList
     * @constructor
     * @this {TodoList}
     */
    function TodoList() {
        this._todos = {};
    }

    /**
     * Добавляет дело в список
     * @param {string} title Заголовок дела
     * @param {string} text Текст дела
     * @returns {TodoList} Ссылка на самого себя
     */
    TodoList.prototype.add = function (title, text) {
        if (this._todos[title] === undefined) {
            this._todos[title] = text;
        }

        return this;
    };

    /**
     * Отдает текст дела по его заголовку
     * @param {string} title Заголовок дела
     * @returns {string} Текст дела
     */
    TodoList.prototype.get = function (title) {
        return this._todos[title];
    };

    /**
     * Удаляет дело по его заголовку
     * @param {string} title Заголовк дела
     * @returns {TodoList}
     */
    TodoList.prototype.remove = function (title) {
        delete this._todos[title];

        return this;
    };

    /**
     * Редактирует заведенное дело
     * @param {string} title Заголовок дела
     * @param {string} text Текст дела
     * @returns {TodoList}
     */
    TodoList.prototype.edit = function (title, text) {
        if (this._todos[title] !== undefined) {
            this._todos[title] = text;
        }

        return this;
    };

    /**
     * Очищает список дел
     * @returns {TodoList}
     */
    TodoList.prototype.clean = function () {
        this._todos = {};

        return this;
    };

    return TodoList;
})();
{% endhighlight %}

## Паттерн "Синглтон"

{% highlight js %}
var ClosureConstructorSingleton = new function () {
    var instance;

    // Конструктор
    function ClosureConstructorSingleton() {
        if (!instance) {
            instance = this;
        } else {
            return instance;
        }
    }

    // Приватные методы и свойства
    function _privateMethod() {
        //
    }

    // Публичные методы
    ClosureConstructorSingleton.prototype.toString = function () {
        return '[object ClosureConstructorSingleton]';
    };

    return ClosureConstructorSingleton;
};
{% endhighlight %}

## Кусок тестов для паттерна "Стратегия"

{% highlight js %}
describe('Стратегия / Strategy', function () {

    var calc;

    beforeEach(function () {
        calc = new Calculator();
    });

    describe('Инстанс', function () {

        it('Calculator', function () {
            expect(calc).to.be.instanceOf(Calculator);
        });

        it('Методы', function () {
            expect(calc.set).to.be.a('function');
            expect(calc.execute).to.be.a('function');
        });
    });

    describe('Поведение', function () {

        it('Calculator.execute', function () {
            expect(calc.execute('add', 4, 5)).to.equal(9);
            expect(calc.execute('subtract', 4, 5)).to.equal(-1);
            expect(calc.execute('multiply', 4, 5)).to.equal(20);
            expect(calc.execute('divide', 40, 5)).to.equal(8);
        });

        it('Calculator.set', function () {

            calc
                .set('pow', function(x, y) {
                    return Math.pow(x, y);
                });

            expect(calc.execute('pow', 15, 2)).to.equal(225);

        });

    });
});
{% endhighlight %}
