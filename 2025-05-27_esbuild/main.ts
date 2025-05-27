import bitwise from "bitwise";
declare global {
    var bitwise: typeof import("bitwise");
}
export function add(a: number, b: number): number {
    return a + b;
}
for (let i = 0; i < 5; i++) {
    const a = Math.round(Math.random() * 10);
    const b = Math.round(Math.random() * 10);
    console.log(`Addition ${i}: ${a} + ${b} = ${add(a, b)}`);
}

globalThis.bitwise = bitwise;
const bits = bitwise.byte.read(42);
// [0, 0, 1, 0, 1, 0, 1, 0]

console.log(bitwise.bits.toString(bits, 4));
// '0010 1010'

console.log(bitwise.byte.write(bits));
// 42

console.log(bitwise.bits.and([0, 0, 1, 1], [0, 1, 0, 1]));
// [0, 0, 0, 1]

console.log(bitwise.bits.xor([0, 0, 1, 1], [0, 1, 0, 1]));
// [0, 1, 1, 0]

// cherry-pick parts of bitwise
