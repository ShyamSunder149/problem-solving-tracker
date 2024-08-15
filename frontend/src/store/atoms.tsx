import { atom } from "recoil";

export const countState = atom({
    key: "count",
    default: 0
})

export const lcState = atom({
    key: "lc",
    default: {
        solved : 0, 
        total : 0
    }
})

export const gfgState = atom({
    key: "gfg",
    default : 0
})
