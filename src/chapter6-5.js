// {
//     // async
//     async function fn1() {
//         await console.log(1)
//         await console.log(2)
//         await console.log(3)
//     }
//     fn1()
// }

// {
//     function fn1() {
//         setTimeout(() => {
//             console.log('任务1')
//         }, 1000)
//     }

//     function fn2() {
//         setTimeout(() => {
//             console.log('任务2')
//         }, 1000)
//     }

//     function fn3() {
//         setTimeout(() => {
//             console.log('任务3')
//         }, 1000)
//     }

//     function init() {
//         fn1()
//         fn2()
//         fn3()
//     }

//     init()
// }

{
    function fn1() {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('任务1')
                resolve()
            }, 1000)
        })
    }

    function fn2() {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('任务2')
                resolve()
            }, 1000)
        })
    }

    function fn3() {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('任务3')
                resolve()
            }, 1000)
        })
    }

    async function init(fn1, fn2, fn3) {
        await fn1()
        await fn2()
        await fn3()
    }

    init(fn1, fn2, fn3)
}