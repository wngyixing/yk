var gulp = require('gulp'),
    browserSync = require('browser-sync'),

    urltool = require('url');

gulp.task("default", function() {
    browserSync.init({
        server: {
            baseDir: "./src",
            index: "./page/main.html",
            middleware: function(req, res, next) {
                var objurl = urltool.parse(req.url, true)
                if (objurl.pathname === "/getnav") {
                    var arr = [{
                        title: "床品件套"
                    }, {
                        title: "被枕"
                    }, {
                        title: "家具"
                    }, {
                        title: "收纳"
                    }, {
                        title: "布艺软装"
                    }, {
                        title: "家饰"
                    }, {
                        title: "宠物"
                    }, {
                        title: "收纳"
                    }]
                    res.end(JSON.stringify(arr))
                } else if (objurl.pathname === "/getlist") {
                    var arr = [{
                        img: "./stutic/img/list1.png",
                        tit: "柔滑兰精天丝，清凉 亲肤保湿",
                        pic: "即将上架",
                        title: "Paisley欧式天丝四件套",
                        pice: "599",

                    }, {
                        img: "./stutic/img/list2.png",
                        tit: "双层呼吸纱，纯棉超柔亲肤",
                        pic: "",
                        title: "透气呼吸纱四件套",
                        pice: "459"
                    }, {
                        img: "./stutic/img/list3.png",
                        tit: "柔滑兰精天丝，清凉 亲肤保湿",
                        pic: "即将上架",
                        title: "Paisley欧式天丝四件套",
                        pice: "599"
                    }, {
                        img: "./stutic/img/list4.png",
                        tit: "柔滑兰精天丝，清凉 亲肤保湿",
                        pic: "即将上架",
                        title: "Paisley欧式天丝四件套",
                        pice: "599"
                    }, {
                        img: "./stutic/img/list3.png",
                        tit: "柔滑兰精天丝，清凉 亲肤保湿",
                        pic: "即将上架",
                        title: "Paisley欧式天丝四件套",
                        pice: "599"
                    }, {
                        img: "./stutic/img/list4.png",
                        tit: "柔滑兰精天丝，清凉 亲肤保湿",
                        pic: "即将上架",
                        title: "Paisley欧式天丝四件套",
                        pice: "599"
                    }]
                    res.end(JSON.stringify(arr))
                } else if (objurl.pathname === "/getlists") {
                    var data = [{
                        id: 1,
                        img: "./stutic/img/list1.png",
                        cont: [{
                            img: "./stutic/img/lists1.png ",
                            tit: "兰精天丝",
                            tits: "细腻绵柔"
                        }, {
                            img: "./stutic/img/lists2.png ",
                            tit: "兰精天丝",
                            tits: "细腻绵柔"
                        }, {
                            img: "./stutic/img/lists3.png ",
                            tit: "兰精天丝",
                            tits: "细腻绵柔"
                        }],
                        title: "Paisley欧式天丝四件套",
                        tit: "柔滑兰精天丝，清凉 亲肤保湿",
                        pice: "599"
                    }]
                    res.end(JSON.stringify(data))
                } else {
                    next()
                }

            }
        },
        files: ["src"],
        port: 9999,
        host: "localhost"
    })
})