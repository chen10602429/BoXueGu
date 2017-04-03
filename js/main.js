define([],function(){
    //配置
    require.config({
        baseUrl: './',
        pashs: {
            advertAdd: 'js/advert/advert_add',
            advertList: 'js/advert/advert_list',
            courseAdd1: 'js/course/course_add_step1',
            courseAdd2: 'js/course/course_add_step2',
            courseAdd3: 'js/course/course_add_step3',
            courseAdd: 'js/course/course_add',
            courseCategorAdd: 'js/course/course_category_add',
            courseCategor: 'js/course/course_category',
            courseList: 'js/course/course_list',
            courseTopic: 'js/course/course_topic',
            login: 'js/login/login',
            repass: 'js/repass/repass',
            settings: 'js/settings/settings',
            teacherAdd: 'js/teacher/teacher_add',
            teacherList: 'js/teacher/teacher_list',
            userList: 'js/user/user_list',
            userProfile: 'js/user/user_profile'
        }
    })
    //根据页面加载对应的js模块

})