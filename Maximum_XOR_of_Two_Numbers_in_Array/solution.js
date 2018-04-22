/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
    let bitsArray = nums.map(n => calcBits(n));
    let root = buildBitsTree(bitsArray);
    let maxBits = [];
    for (let i = 0; i < 31; ++i) maxBits.push(0);
    
    bitsArray.forEach(bits => {
        let node = root;
        let strictLarge = false;
        for (let i = 0; i < 31; ++i) {
            let dir = "";
            let b = bits[i];
            if (b === 1) {
                dir = node.left ? 
                      "left" : node.right ? 
                      "right" : "";
            } else {
                dir = node.right ? 
                      "right" : node.left ? 
                      "left" : "";
            }
            if (!dir) throw "Unexpected bots tree";
            node = node[dir];
            let xor = b ^ node.bit;
            if (strictLarge) {
                maxBits[i] = xor;
            } else {
                if (xor > maxBits[i]) {
                    maxBits[i] = xor;
                    strictLarge = true;
                } else if (xor < maxBits[i]) {
                    break;
                }
            }
        }
    });
    
    let max = 0;
    let power = 30;
    while (power >= 0) {
        max += maxBits.shift() * (2 ** power);
        power--;
    }
    return max;
};

function calcBits(n) {
    let bits = [];
    for (let i = 0; i < 31; ++i) {
        if (n & 1) {
            bits.unshift(1);
        } else {
            bits.unshift(0);
        }
        n >>= 1;
    }
    return bits;
}

function buildBitsTree(bitsArray) {
    let root = {
        bit: 0,
        left: null,
        right: null,
    };
    bitsArray.forEach(bits => insertBits(root, bits));
    return root;
}

function insertBits(root, bits) {
    let node = root;
    bits.forEach(b => {
        if (b === 1) {
            if (!node.right) {
                node.right = { bit: b };
            }
            node = node.right;
        } else {
            if (!node.left) {
                node.left = { bit: b };
            }
            node = node.left;
        }
    });
}
