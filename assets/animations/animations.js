export const diveIn = {
    from :{
        opacity:0,
        scale:0,
        left:-100,
        top:-100
    },

    to :{
        opacity:1,
        scale:1,
        left:0,
        top:0
    }

}


export const diveOut = {

    0:{
        opacity:1,
        scale:1,
        left:0,
        top:0
    },
    0.3:{
        opacity:.5,
        scale:2,
        left:100,
        top:-100
    },
    0.5:{
        opacity:0.7,
        scale:.2,
        left:-100,
        top:100
    },
    1:{
        opacity:0,
        scale:0,
        left:-1000,
        top:-1000
    },

}