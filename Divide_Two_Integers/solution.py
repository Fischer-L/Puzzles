class Solution:
    def divide(self, dividend, divisor):
        """
        :type dividend: int
        :type divisor: int
        :rtype: int
        """
        sign = 1
        dvd = dividend
        dvs = divisor
        if dvd < 0 and dvs > 0:
            sign = -1
            dvs = -dvs
        elif dvd > 0 and dvs < 0:
            sign = -1
            dvd = -dvd
        if dvd == dvs: return 1 if sign > 0 else -1
        elif not self._exceed(dvd, dvs): return 0
        
        q = 0
        d = dvs
        while self._exceed(dvd, d):
            if d > 0 and MAX_INT - d < d: break
            elif d < 0 and MIN_INT - d > d: break
            d <<= 1
            q += 1
            if not self._exceed(dvd, d): q -= 1
        dvd -= dvs << q
        
        main = 1 << q
        rest = self.divide(dvd, dvs)
        if sign > 0:
            diff = MAX_INT - main
            if rest > diff: rest = diff
        else:
            main = -main
            rest = -rest
            diff = MIN_INT - rest
            if rest < diff: rest = diff
        return main + rest
        
    def _exceed(self, dvd, dvs):
        if dvd > 0: return dvd > dvs
        return dvd < dvs

MIN_INT = (-2) ** 31
MAX_INT = (2 ** 31) - 1
