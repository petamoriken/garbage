/**
 * アッカーマン函数っぽい函数
 * @param {bigint} m
 * @param {bigint} n
 * @param {(m: bigint) => bigint} f
 */
function arkLike(m, n, f) {
    if (m === 0n) { return f(n); }
    if (n === 0n) { return arkLike(m - 1n, 1n, f); }
    return arkLike(m - 1n, arkLike(m, n - 1n, f), f);
}

/**
 * S 変換をする函数
 * @param {bigint} m
 * @param {(m: bigint)=>bigint} f
 */
function sConv(m, f) {
    const g = (x) => arkLike(x, x, f);
    return [g(m), g];
}

/**
 * SS 変換する函数
 * @param m {bigint}
 * @param f {(m: bigint) => bigint}
 * @param conv {(m: bigint, f: (m: bigint) => bigint) => [bigint, (m: bigint) => bigint]}
 */
function ssConv(m, f, conv) {
    for (let i = 0n; i < f(m); ++i) {
        [m, f] = conv(m, f);
    }
    return [m, f, convN];
}

let [m, f, conv] = [3n, (m) => m + 1n, sConv];
for (let i = 0; i < 63; ++i) {
    [m, f, conv] = ssConv(m, f, conv);
}

console.log(m);
