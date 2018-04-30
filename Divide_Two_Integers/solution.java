class Solution {
    public int divide(int dividend, int divisor) {
        int sign = 1;
        if (dividend < 0 && divisor > 0) {
            sign = -1;
            divisor = -divisor;
        } else if (dividend > 0 && divisor < 0) {
            sign = -1;
            dividend = -dividend;
        }
        if (dividend == divisor) return sign > 0 ? 1 : -1;
        else if (!this.exceed(dividend, divisor)) return 0;
        
        int q = 0;
        int d = divisor;
        while (this.exceed(dividend, d)) {
            if (d > 0 && Integer.MAX_VALUE - d < d) break;
            else if (d < 0 && Integer.MIN_VALUE - d > d) break;
            d <<= 1;
            q++;
            if (!this.exceed(dividend, d)) q--;
        }
        dividend -= divisor << q;
        
        int main = 1 << q;
        int rest = this.divide(dividend, divisor);
        if (sign > 0) {
            int diff = Integer.MAX_VALUE - main;
            if (rest > diff) rest = diff;
        } else {
            main = -main;
            rest = -rest;
            int diff = Integer.MIN_VALUE - main;
            if (rest < diff) rest = diff;
        }
        return main + rest;
    }
    
    private boolean exceed(int dividend, int divisor) {
        if (dividend > 0) {
            return dividend > divisor;
        }
        return divisor > dividend;
    }
}
