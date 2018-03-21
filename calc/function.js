"use strict";

const memo = new Map();

exports.create3operatorsFunction = function create3operatorsFunction(op1, op2, op3) {
    const hash = `${op1}#${op2}#${op3}`;

    const created = memo.get(hash);
    if (created) return created;

    const operatorsFunction = new Function("num1", "num2", "num3", "num4", `return num1 ${op1} num2 ${op2} num3 ${op3} num4`);
    memo.set(hash, operatorsFunction);
    return operatorsFunction;
}
