// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        blockBoardDic : {
            default : null,
            visible : false,
        },
        boardLength : {
            default : 12,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.blockBoardDic = {};
    },

    //初始化
    blockBoardInit (){
        for(let i = 0 ; i < this.boardLength; i++){
            for(let j = 0 ; j < this.boardLength; j++){
                let block = this.createRandomBlock();
                this.blockBoardDic[String(i) + String(j)] = block;
            }
        }
        this.reloadBoard();
    },

    reloadBoard (){

    },

    //填满board
    fillInBoardOneLine (){
        let blockDic = this._createBoardDic();
        let holeDic = this.getHoleDic();
        let moveDic = {};

        for(let i = 0 ; i < this.boardLength ; i++){
            moveDic[i] = 0;
        }
        for(let i in holeDic){
            let key = i;
            moveDic[key[0]] ++;
            for(let j = key[1] - 1; j >= 0 ; j--){
                blockDic[key[0] + j] ++;
            }
        }

        for(let i = 0 ; i < this.boardLength ; i++){
            if(moveDic[i] > 0){
                let newBlock = this.createRandomBlock();
                this.addBlockToBoard(newBlock);
                let startSPos = cc.v2(i,this.boardLength);
                let endSPos = cc.v2(i,this.boardLength - moveDic[i]);
                this.blockMove(newBlock,startSPos,endSPos);
            }
        }
    },

    blockMove (block,startSPos,endSPos){
        if(typeof(endSPos) == undefined){
            endSPos = startSPos;
            startSPos = block.pos;
        }
    },

    addBlockToBoard(newBlock){

    },

    _createBoardDic (){
        let blockDic = {};
        for(let i = 0 ; i < this.boardLength; i++){
            for(let j = 0 ; j < this.boardLength; j++){
                blockDic[String(i) + String(j)] = 0;
            }
        }
        return blockDic;
    },

    getHoleDic (){
        let holeDic = {};
        for(let i = 0 ; i < this.boardLength; i++){
            for(let j = 0 ; j < this.boardLength; j++){
                let blockKey = String(i) + String(j);
                let block = this.blockBoardDic[blockKey];
                if(!block){
                    holeDic[blockKey] = 1;
                }
            }
        }
        return holeDic;
    },

    //创造一个随机block
    createRandomBlock (){

    },

    //根据预制初始化
    blockBoardInitPrefab (){

    },

    //检查方块是否可以组合
    checkBlock (){

    },

    // update (dt) {},
});
