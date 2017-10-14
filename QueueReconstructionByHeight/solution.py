from operator import itemgetter

class Solution(object):
    def reconstructQueue(self, people):
        """
        :type people: List[List[int]]
        :rtype: List[List[int]]
        """
        # Sort people by k then h
        ordered = sorted(people, key = itemgetter(1, 0))
        ans = []
        targetK = -1
        candidates = None
        
        while ordered:
            targetK += 1
            candidates = []
            # Pick out canidates with the taregt k
            while ordered and ordered[0][1] == targetK:
                candidates.append(ordered.pop(0))
            
            if not ans:
                ans = candidates
            else:
                for c in candidates:
                    i = 0
                    curretnK = 0
                    ansLen = len(ans)
                    while c:
                        if curretnK == targetK:
                            if (i == ansLen):
                                ans.append(c)
                                c = None
                            else:
                                a = ans[i]
                                if c[0] < a[0]:
                                    ans.insert(i, c)
                                    c = None
                        else:
                            # Increase the current fillfilles k by 1
                            # if the current position's value fullfills the candidate's h value condition
                            a = ans[i]
                            if a[0] >= c[0]: curretnK += 1
                        i += 1
        return ans
                        
