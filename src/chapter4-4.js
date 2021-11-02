{
    // 对象中扩展运算符的使用

    // 复制对象
    const obj = { name: 'James', video: 'es6' }
    const initObj = { color: 'red' }
    let videoObj = { ...obj }
    console.log(videoObj)

    // 设置对象默认值
    let obj2 = { ...obj, name: 'John' }
    console.log(obj2)

    // 合并对象
    let obj3 = { ...obj, ...initObj }
    console.log(obj3)

    // 坑点
    // 简单类型的时候，使用扩展运算符是没问题的，但是如果展开扩展运算符展开对象以后还是一个对象以后，还是一个对象的话，我们复制的只是一个指针
}

{
    let name = '小曹'
    let age = 18
    let es5Obj = {
        name: name,
        age: age,
        sayHello: function () {
            console.log('this is es5Obj')
        }
    }
    let es6Obj = {
        name,
        age,
        sayHello() {
            console.log('this is es6Obj')
        }
    }

    console.log('es5', es5Obj)
    console.log('es6', es6Obj)
    es5Obj.sayHello()
    es6Obj.sayHello()
}

{
    let key = 'name'
    let es5Obj = {}
    es5Obj[key] = '小曹'
    let es6Obj = {
        [key]: '小郑'
    }
    console.log(es5Obj, es6Obj)
}

{
    // 新增方法

    // Object.is()和'==='
    let result = Object.is(NaN, NaN)
    console.log(result, NaN === NaN)

    // Object.assign()
    const person = { name: '小曹', age: 18, info: { height: 180 } }
    let person2 = {}
    Object.assign(person2, person)
    console.log(person2)
    person.info.height = 160
    console.log(person2)
}

{
    // Array.from 类数组对象 有length, 可遍历
    const str = 'hello'
    const strList = Array.from(str)
    console.log(strList)
}

{
    // Object.keys(), Object.values(), Object.entries()
    const json = { name: 'James', video: 'es6', date: 2021 }
    let obj = {}
    for (const key of Object.keys(json)) {
        obj[key] = json[key]
    }
    console.log(obj)
}