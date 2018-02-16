/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) return false;
    
    let m = new Map();
    for (let i = 0; i < s.length; ++i) {
        let c = s[i];
        if (m.has(c)) {
            m.set(c, m.get(c) + 1);
        } else {
            m.set(c, 1);
        }
    }
    
    
    for (let i = 0; i < t.length; ++i) {
        let c = t[i];
        if (m.has(c)) {
            let v = m.get(c) - 1;
            if (v > 0) {
                m.set(c, v);
            } else {
                m.delete(c);
            }
        }
    }
    
    return m.size == 0;
};
