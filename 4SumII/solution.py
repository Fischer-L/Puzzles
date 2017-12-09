from collections import Counter

class Solution:
    def fourSumCount(self, A, B, C, D):
      AB = Counter(a+b for a in A for b in B)
      return sum(AB[-c-d] for c in C for d in D)
