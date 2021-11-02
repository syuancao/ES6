// {
//     const say = function* () {
//         yield 'a'
//         yield 'b'
//         yield 'c'
//     }

//     const fn = say()
//     console.log(fn.next())
// }

// {
//     let obj = {
//         a: 1,
//         b: 2,
//         c: 3
//     }

//     obj[Symbol.iterator] = function* () {
//         for (const key of Object.keys(obj)) {
//             yield obj[key]
//         }
//     }

//     for (const value of obj) {
//         console.log(value)
//     }
// }

// {
//     // 任何时候都只有一定数量的状态
//     const state = function* () {
//         while (1) {
//             yield 'success'
//             yield 'fail'
//             yield 'pending'
//         }
//     }
//     const stateData = state()
//     console.log(stateData.next())
//     console.log(stateData.next())
//     console.log(stateData.next())
//     console.log(stateData.next())
// }

// {
//     // 长轮询
//     function fn1() {
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 console.log('查询中')
//                 resolve({ code: 0 })
//             }, 1000)
//         })
//     }

//     const getStatus = function* () {
//         yield fn1()
//     }

//     function autoGetStatus() {
//         const gen = getStatus()
//         const status = gen.next()
//         status.value.then(res => {
//             if (res.code === 0) {
//                 console.log('用户付款成功')
//             } else {
//                 console.log('暂未付款')
//                 setTimeout(() => autoGetStatus(), 500)
//             }
//         })
//     }

//     autoGetStatus()
// }

// {
//     const ajax = function* () {
//         console.log('任务start')
//         yield setTimeout(() => {
//             console.log('异步任务执行结束')
//         }, 100)
//         console.log('end')
//     }

//     const runAjax = ajax()
//     runAjax.next()
//     runAjax.next()
// }

{
    const ajax = function* () {
        console.log('任务start')
        yield function (cb) {
            setTimeout(() => {
                console.log('异步任务结束')
                cb && cb()
            }, 1000)
        }
        console.log('end')
    }

    const runAjax = ajax()
    const first = runAjax.next()
    first.value(() => runAjax.next())
}