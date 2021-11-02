{
    // 什么是Iterator
    // 取出数据集合里的数据， 通过遍历， Iterator提供了一个接口，通过for of调用这个接口，输出数据集合中的数据
    const arr = [1, 2, 3]
    const fn = arr[Symbol.iterator]()
    console.log(fn.next())
    console.log(fn.next())
    console.log(fn.next())
    console.log(fn.next())
}

{
    // 应用场景
    const obj = {
        color: 'red',
        price: 18,
        size: 'small',
        [Symbol.iterator]() {
            let index = 0
            const values = Object.values(this)
            return {
                next() {
                    if (index < values.length) {
                        return {
                            value: values[index++],
                            done: false
                        }
                    } else {
                        return {
                            done: true
                        }
                    }
                }
            }
        }
    }

    for (const value of obj) {
        console.log(value)
    }
}