"use strict";

exports.get4numbers = function* get4numbers() {
    for (let i = 0; i < 1e4; ++i) {
        const str = (i + "").padStart(4, "0");
        yield [...str].map(val => val |0);
    }
}

/**
 * 二項演算子
*/
const operators = [
    "+", "-", "*", "/", "**",   // 算術演算子
    "<", ">", "<=", ">=",       // 関係演算子
    "==", "!=", "===", "!==",   // 等価演算子
    "<<", ">>", ">>>",          // ビットシフト演算子
    "&", "|", "^",              // バイナリビット演算子
    "&&", "||",                 // 論理演算子
];

function* get1operator(hasQuestion, hasColon) {
    yield* operators;
    if (hasQuestion) {
        yield "?";
    }
    if (hasColon) {
        yield ":";
    }
    // ? と : の間に , が来てはならない
    if (!hasColon) {
        yield ",";
    }
}

exports.get3operators = function* get3operators() {
    loop: for (const op1 of get1operator(true, false)) {
        const hasQuestion = op1 !== "?";
        for (const op2 of get1operator(hasQuestion, !hasQuestion)) {
            const mustHasColon = op1 === "?" && op2 !== ":" || op2 === "?";
            if (mustHasColon) {
                yield [op1, op2, ":"];
                continue loop;
            }
            for (const op3 of get1operator(false, false)) {
                yield [op1, op2, op3];
            }
        }
    }
}
