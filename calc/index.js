"use strict";

/**
 * @file 4つの数字で10を作るやつ
 *
 * 4つの数字の間に好きな演算子を使って良い
 * 括弧は駄目
 *
 * @example
 * // 基本的に二項演算子だらけになる
 * 1 + 2 + 3 + 4
 * 0 - 2 + 4 * 2
 *
 * // 三項演算子を使っても良い
 * 1 ? 4 + 6 : 2
 */

const { createWriteStream } = require("fs");

const { get4numbers, get3operators } = require("./iterator");
const { create3operatorsFunction } = require("./function");

const allAnswerStream = createWriteStream("all_answer.txt");
const noAnswerSteam = createWriteStream("no_answer.csv");
for (const [num1, num2, num3, num4] of get4numbers()) {
    let hasAnswer = false;
    for (const [op1, op2, op3] of get3operators()) {
        if (create3operatorsFunction(op1, op2, op3)(num1, num2, num3, num4) === 10) {
            allAnswerStream.write(`${num1} ${op1} ${num2} ${op2} ${num3} ${op3} ${num4}\n`);
            hasAnswer = true;
        }
    }
    if (hasAnswer) {
        allAnswerStream.write("\n");
    } else {
        noAnswerSteam.write(`${num1}, ${num2}, ${num3}, ${num4}\n`);
    }
}
