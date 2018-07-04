
cc.Class({
    extends: cc.Component,

    properties: {
        life : {
            default : 1,
            visible : false,
        },//消除次数

        pos : {
            default : cc.v2(0,0),
            visible : false,
        },

        type : {
            default : G_Con.blockType.default,
            visible : false,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    //测试中文乱码
    start () {

    },

    setType (type){
        this.type = type;
    },

});
