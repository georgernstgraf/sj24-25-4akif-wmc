// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/bits/and.js
var and_default = function(bits1, bits2) {
  var result = [];
  for (var i = 0; i < bits1.length; i++)
    result[i] = bits1[i] & bits2[i];
  return result;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/bits/circular-shift-left.js
var circular_shift_left_default = function(bits2, amount) {
  var result = [];
  if (amount > bits2.length)
    throw new Error("shift amount can\u2019t be larger than bits array length");
  for (var i = 0; i < bits2.length; i++)
    result[(bits2.length + i - amount) % bits2.length] = bits2[i];
  return result;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/bits/circular-shift-right.js
var circular_shift_right_default = function(bits2, amount) {
  var result = [];
  if (amount > bits2.length)
    throw new Error("shift amount can\u2019t be larger than bits array length");
  for (var i = 0; i < bits2.length; i++)
    result[(i + amount) % bits2.length] = bits2[i];
  return result;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/bits/nand.js
var nand_default = function(bits1, bits2) {
  var result = [];
  for (var i = 0; i < bits1.length; i++)
    result[i] = bits1[i] & bits2[i] ^ 1;
  return result;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/bits/nor.js
var nor_default = function(bits1, bits2) {
  var result = [];
  for (var i = 0; i < bits1.length; i++)
    result[i] = (bits1[i] | bits2[i]) ^ 1;
  return result;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/bits/not.js
var not_default = function(bits2) {
  var result = [];
  for (var i = 0; i < bits2.length; i++)
    result[i] = bits2[i] ^ 1;
  return result;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/bits/or.js
var or_default = function(bits1, bits2) {
  var result = [];
  for (var i = 0; i < bits1.length; i++)
    result[i] = bits1[i] | bits2[i];
  return result;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/bits/reduce-and.js
var reduce_and_default = function(bits2) {
  if (bits2.length < 2)
    throw new RangeError("Not enough bits.");
  var result = bits2[0];
  for (var i = 1; i < bits2.length; i++)
    result &= bits2[i];
  return result;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/bits/reduce-nand.js
var reduce_nand_default = function(bits2) {
  if (bits2.length < 2)
    throw new RangeError("Not enough bits.");
  var result = bits2[0];
  for (var i = 1; i < bits2.length; i++)
    result = result & bits2[i] ^ 1;
  return result;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/bits/reduce-nor.js
var reduce_nor_default = function(bits2) {
  if (bits2.length < 2)
    throw new RangeError("Not enough bits.");
  var result = bits2[0];
  for (var i = 1; i < bits2.length; i++)
    result = (result | bits2[i]) ^ 1;
  return result;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/bits/reduce-or.js
var reduce_or_default = function(bits2) {
  if (bits2.length < 2)
    throw new RangeError("Not enough bits.");
  var result = bits2[0];
  for (var i = 1; i < bits2.length; i++)
    result |= bits2[i];
  return result;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/bits/reduce-xnor.js
var reduce_xnor_default = function(bits2) {
  if (bits2.length < 2)
    throw new RangeError("Not enough bits.");
  var result = bits2[0];
  for (var i = 1; i < bits2.length; i++)
    result ^= bits2[i] ^ 1;
  return result;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/bits/reduce-xor.js
var reduce_xor_default = function(bits2) {
  if (bits2.length < 2)
    throw new RangeError("Not enough bits.");
  var result = bits2[0];
  for (var i = 1; i < bits2.length; i++)
    result ^= bits2[i];
  return result;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/bits/to-boolean.js
var to_boolean_default = function(bits2) {
  var result = [];
  for (var i = 0; i < bits2.length; i++)
    result[i] = bits2[i] === 1;
  return result;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/bits/to-string.js
var to_string_default = function(bits2, spacing, spacer) {
  if (spacing === void 0) {
    spacing = 0;
  }
  if (spacer === void 0) {
    spacer = " ";
  }
  if (!spacing)
    return bits2.join("");
  var result = "";
  for (var i = 0; i < bits2.length; i++) {
    result += "".concat(bits2[i]);
    if (i % spacing === spacing - 1 && i !== bits2.length - 1)
      result += spacer;
  }
  return result;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/bits/xnor.js
var xnor_default = function(bits1, bits2) {
  var result = [];
  for (var i = 0; i < bits1.length; i++)
    result[i] = bits1[i] ^ bits2[i] ^ 1;
  return result;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/bits/xor.js
var xor_default = function(bits1, bits2) {
  var result = [];
  for (var i = 0; i < bits1.length; i++)
    result[i] = bits1[i] ^ bits2[i];
  return result;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/bits/index.js
var bits_default = {
  and: and_default,
  circularShiftLeft: circular_shift_left_default,
  circularShiftRight: circular_shift_right_default,
  nand: nand_default,
  nor: nor_default,
  not: not_default,
  or: or_default,
  reduceAnd: reduce_and_default,
  reduceNand: reduce_nand_default,
  reduceNor: reduce_nor_default,
  reduceOr: reduce_or_default,
  reduceXnor: reduce_xnor_default,
  reduceXor: reduce_xor_default,
  toBoolean: to_boolean_default,
  toString: to_string_default,
  xnor: xnor_default,
  xor: xor_default
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/buffer/and.js
var and_default2 = function(a, b, isLooping) {
  if (isLooping === void 0) {
    isLooping = false;
  }
  var length = isLooping ? b.length : a.length;
  var result = Buffer.alloc(length);
  for (var i = 0; i < length; i++) {
    var j = isLooping ? i % a.length : i;
    result[i] = a[j] & b[i];
  }
  return result;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/byte/write.js
var write_default = function(byte) {
  if (!Array.isArray(byte) || byte.length !== 8)
    throw new RangeError("invalid array length");
  var data = 0;
  for (var i = 0; i < 8; i++)
    if (byte[7 - i])
      data |= 1 << i;
  return data;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/buffer/create.js
var create_default = function(bits2) {
  var data = [0, 0, 0, 0, 0, 0, 0, 0];
  var buffer = Buffer.alloc(Math.ceil(bits2.length / 8));
  for (var i = 0; i < buffer.length; i++) {
    for (var j = 0; j < 8; j++) {
      if (bits2[i * 8 + j])
        data[j] = bits2[i * 8 + j];
      else
        data[j] = 0;
    }
    buffer[i] = write_default(data);
  }
  return buffer;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/byte/read.js
var read_default = function(byte) {
  if (byte > 255 || byte < 0 || ~~byte !== byte)
    throw new RangeError("invalid byte");
  var result = [0, 0, 0, 0, 0, 0, 0, 0];
  for (var i = 0; i < 8; i++)
    result[7 - i] = byte >> i & 1;
  return result;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/buffer/read.js
var read_default2 = function(buffer, offset, length) {
  if (offset === void 0) {
    offset = 0;
  }
  if (!length)
    length = buffer.length * 8 - offset;
  var start = Math.floor(offset / 8);
  var bytesToRead = Math.floor(length / 8) + 2;
  var arr = [];
  arr.length = bytesToRead * 8;
  for (var i = 0; i < bytesToRead; i++) {
    var toRead = buffer[start + i];
    if (toRead === void 0)
      continue;
    var bits2 = read_default(buffer[start + i]);
    arr[i * 8] = bits2[0];
    arr[i * 8 + 1] = bits2[1];
    arr[i * 8 + 2] = bits2[2];
    arr[i * 8 + 3] = bits2[3];
    arr[i * 8 + 4] = bits2[4];
    arr[i * 8 + 5] = bits2[5];
    arr[i * 8 + 6] = bits2[6];
    arr[i * 8 + 7] = bits2[7];
  }
  var subOffset = offset % 8;
  return arr.slice(subOffset, subOffset + length);
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/buffer/modify.js
var modify_default = function(buffer, bits2, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var start = Math.floor(offset / 8);
  var end = Math.ceil((offset + bits2.length) / 8);
  var subBuffer = buffer.slice(start, end);
  var byteData = read_default2(subBuffer);
  var subOffset = offset % 8;
  for (var i = 0; i < bits2.length; i++)
    byteData[subOffset++] = bits2[i];
  var length = end - start;
  for (var i_1 = 0; i_1 < length; i_1++)
    subBuffer[i_1] = write_default(byteData.slice(i_1 * 8, (i_1 + 1) * 8));
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/buffer/nand.js
var nand_default2 = function(a, b, isLooping) {
  if (isLooping === void 0) {
    isLooping = false;
  }
  var length = isLooping ? b.length : a.length;
  var result = Buffer.alloc(length);
  for (var i = 0; i < length; i++) {
    var j = isLooping ? i % a.length : i;
    result[i] = ~(a[j] & b[i]);
  }
  return result;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/buffer/nor.js
var nor_default2 = function(a, b, isLooping) {
  if (isLooping === void 0) {
    isLooping = false;
  }
  var length = isLooping ? b.length : a.length;
  var result = Buffer.alloc(length);
  for (var i = 0; i < length; i++) {
    var j = isLooping ? i % a.length : i;
    result[i] = ~(a[j] | b[i]);
  }
  return result;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/buffer/not.js
var not_default2 = function(buffer) {
  var result = Buffer.alloc(buffer.length);
  for (var i = 0; i < buffer.length; i++)
    result[i] = ~buffer[i];
  return result;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/buffer/or.js
var or_default2 = function(a, b, isLooping) {
  if (isLooping === void 0) {
    isLooping = false;
  }
  var length = isLooping ? b.length : a.length;
  var result = Buffer.alloc(length);
  for (var i = 0; i < length; i++) {
    var j = isLooping ? i % a.length : i;
    result[i] = a[j] | b[i];
  }
  return result;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/utilities.js
var p2 = [];
for (i = 0; i < 32; i++)
  p2[i] = Math.pow(2, i);
var i;

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/buffer/read-int.js
var read_int_default = function(buffer, offset, length) {
  if (offset === void 0) {
    offset = 0;
  }
  if (length === void 0) {
    length = 8;
  }
  var bits2 = read_default2(buffer, offset, length);
  if (bits2[0] === 0) {
    var result = 0;
    for (var i = 0; i < length; i++)
      if (bits2[i])
        result += p2[length - i - 1];
    return result;
  } else {
    var result = -1;
    var inverted = not_default(bits2);
    for (var i = 0; i < length; i++)
      if (inverted[i])
        result -= p2[length - i - 1];
    return result;
  }
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/buffer/read-u-int.js
var read_u_int_default = function(buffer, offset, length) {
  if (offset === void 0) {
    offset = 0;
  }
  if (length === void 0) {
    length = 8;
  }
  var arr = read_default2(buffer, offset, length);
  var result = 0;
  for (var i = 0; i < length; i++)
    result += arr[i] * p2[length - i - 1];
  return result;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/buffer/xnor.js
var xnor_default2 = function(a, b, isLooping) {
  if (isLooping === void 0) {
    isLooping = false;
  }
  var length = isLooping ? b.length : a.length;
  var result = Buffer.alloc(length);
  for (var i = 0; i < length; i++) {
    var j = isLooping ? i % a.length : i;
    result[i] = ~(a[j] ^ b[i]);
  }
  return result;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/buffer/xor.js
var xor_default2 = function(a, b, isLooping) {
  if (isLooping === void 0) {
    isLooping = false;
  }
  var length = isLooping ? b.length : a.length;
  var result = Buffer.alloc(length);
  for (var i = 0; i < length; i++) {
    var j = isLooping ? i % a.length : i;
    result[i] = a[j] ^ b[i];
  }
  return result;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/buffer/index.js
var buffer_default = {
  and: and_default2,
  create: create_default,
  modify: modify_default,
  nand: nand_default2,
  nor: nor_default2,
  not: not_default2,
  or: or_default2,
  read: read_default2,
  readInt: read_int_default,
  readUInt: read_u_int_default,
  xnor: xnor_default2,
  xor: xor_default2
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/byte/index.js
var byte_default = { read: read_default, write: write_default };

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/integer/get-bit.js
var get_bit_default = function(int32, position) {
  return int32 >> position & 1;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/integer/set-bit.js
var set_bit_default = function(int32, position, value) {
  return value === 1 ? int32 | 1 << position : int32 & ~(1 << position);
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/integer/toggle-bit.js
var toggle_bit_default = function(int32, position) {
  return int32 ^ 1 << position;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/integer/index.js
var integer_default = { getBit: get_bit_default, setBit: set_bit_default, toggleBit: toggle_bit_default };

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/nibble/read.js
var read_default3 = function(nibble) {
  if (nibble < 16 && nibble >= 0 && Math.floor(nibble) === nibble) {
    var result = [0, 0, 0, 0];
    for (var i = 0; i < 4; i++)
      result[3 - i] = nibble >> i & 1;
    return result;
  } else
    throw new RangeError("invalid array length");
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/nibble/write.js
var write_default2 = function(nibble) {
  if (!Array.isArray(nibble) || nibble.length !== 4)
    throw new RangeError("invalid array length");
  var result = 0;
  for (var i = 0; i < 4; i++)
    if (nibble[3 - i])
      result |= 1 << i;
  return result;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/nibble/index.js
var nibble_default = { read: read_default3, write: write_default2 };

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/string/to-bits.js
var to_bits_default = function(string) {
  var result = [];
  for (var i = 0; i < string.length; i++) {
    if (string[i] === "1")
      result.push(1);
    else if (string[i] === "0")
      result.push(0);
  }
  return result;
};

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/string/index.js
var string_default = { toBits: to_bits_default };

// ../../../../../.cache/deno/deno_esbuild/registry.npmjs.org/bitwise@2.2.1/node_modules/bitwise/esm/index.js
var bitwise = { bits: bits_default, buffer: buffer_default, byte: byte_default, integer: integer_default, nibble: nibble_default, string: string_default };
var esm_default = bitwise;

// main.ts
function add(a, b) {
  return a + b;
}
for (let i = 0; i < 5; i++) {
  const a = Math.round(Math.random() * 10);
  const b = Math.round(Math.random() * 10);
  console.log(`Addition ${i}: ${a} + ${b} = ${add(a, b)}`);
}
globalThis.bitwise = esm_default;
var bits = esm_default.byte.read(42);
console.log(esm_default.bits.toString(bits, 4));
console.log(esm_default.byte.write(bits));
console.log(esm_default.bits.and([0, 0, 1, 1], [0, 1, 0, 1]));
console.log(esm_default.bits.xor([0, 0, 1, 1], [0, 1, 0, 1]));
export {
  add
};
