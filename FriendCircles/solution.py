class Solution:
    def findCircleNum(self, M):
        """
        :type M: List[List[int]]
        :rtype: int
        """
        return self._findByCollectingSubsets(M)
        
    def _findByCounting(self, M):
        count = ln = len(M)
        
        # the nodes that have been excluded from subset(circle) count
        excluded = set()
        
        for i in range(ln):
            for j in range(i):
                if j not in excluded and M[i][j] == 1:
                    count -= 1
                    excluded.add(j)
        return count
            
    def _findByCollectingSubsets(self, M):
        ln = len(M)
        
        # Create subsets(friend circles) dict
        subsets = {}
        for i in range(ln):
            subsets[i] = [i] # Initially i in Subset i
        
        # Union subsets(friend circles)
        for i in range(ln):
            # Only loop the half of array
            # because M[i][j] = 1, then M[j][i] = 1 (even for i = j)
            for j in range(i):
                # Found i and j are in a subset. Union them.
                if M[i][j] == 1:
                    # Found Subset j, move Subset j into Subset i
                    if j in subsets:
                        subsets[i] = subsets[i] + subsets[j]
                        # Remove Subset j since it is unioned with Subset i
                        del subsets[j]
                    
                    # No Subset j, which means j is in another subset
                    else:
                        # Find the parent subset of j.
                        # Optimization: only have to loop until i because
                        # at this point only nodes below i have been looped (j < i),
                        # j must be in one of Subset 0 to Subset i-1
                        for k in range(i):
                            # Found j in Subset k, move k into Subset i
                            if k in subsets and j in subsets[k]:
                                subsets[i] = subsets[i] + subsets[k]
                                # Remove Subset k since it is unioned with Subset i
                                del subsets[k]
                        
        return len(subsets.keys())
        
        
        
