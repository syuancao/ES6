{
    // 回调地狱
    function ajax(cb) {
        setTimeout(() => {
            cb && cb(() => {
                console.log('任务二')
            })
        }, 1000)
    }
    // ajax((cb2) => {
    //     console.log('任务一')
    //     setTimeout(() => {
    //         cb2 && cb2()
    //     }, 1000)
    // })
}

{
    // Promise改造回调函数
    function ajax() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), 1000)
        })
    }
    // ajax().then(() => {
    //     console.log('任务一')
    // })
}

{
    function ajax() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), 1000)
        })
    }
    // ajax().then(() => {
    //     console.log('任务1')
    //     return new Promise((resolve) => {
    //         setTimeout(() => resolve(), 1000)
    //     })
    // }).then(() => {
    //     console.log('任务2')
    // })
}

{
    // 使用catch方法捕捉错误
    function judgeNumber(num) {
        return new Promise((resolve, reject) => {
            if (typeof (num) === 'number') {
                resolve(num)
            } else {
                const err = new Error('请输入数字')
                reject(err)
            }
        })
    }

    judgeNumber('2')
        .then(num => console.log(num))
        .catch(err => console.log(err))
}

{
    // Promise.all
    const imgUrl1 = 'https://cdn.akamai.steamstatic.com/steam/apps/1551360/ss_b65236b365315ebb6da6114ce42cd74b59cab3c8.600x338.jpg'
    const imgUrl2 = 'https://cdn.akamai.steamstatic.com/steam/apps/1551360/ss_0a13a7ccd38e7c3e6a5f1720050732833b53b6a8.600x338.jpg'
    const imgUrl3 = 'https://cdn.akamai.steamstatic.com/steam/apps/1551360/ss_3c16188972c826942f47991d91b0f6dc17e01fc9.600x338.jpg'

    function getImage(url) {
        return new Promise((resolve, reject) => {
            const img = document.createElement('img')
            img.src = url
            img.onload = () => resolve(img)
            img.onerror = (err) => reject(err)
        })
    }

    function showImage(imgs) {
        imgs.forEach(item => {
            document.body.appendChild(item)
        });
    }

    function showFirstImage(img) {
        document.body.appendChild(img)
    }

    // Promise.all([getImage(imgUrl1), getImage(imgUrl2), getImage(imgUrl3)]).then(showImage)
    // Promise.race用于希望多个Promise函数当中只要一个执行成功这种场景
    Promise.race([getImage(imgUrl2), getImage(imgUrl1), getImage(imgUrl3)]).then(showFirstImage)
}