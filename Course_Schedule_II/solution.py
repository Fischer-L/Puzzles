def courseSchedule(numCourses, prerequisites):
  path = []
  buildEdges(prerequisites)
  for i in range(len(starts)):
    if dfs(starts[i], path, []) == False: return []
  return list(reversed(path))
  
edges = {}
starts = []

def buildEdges(prerequisites):
  vertices = {}
  for i in range(len(prerequisites)):
    edg = prerequisites[i]
    dst = edg[0]
    orig = edg[1]
    if orig not in vertices: vertices[orig] = 1
    vertices[dst] = 0
    if orig not in edges: edges[orig] = []
    edges[orig].append(dst)
  
  for k, v in vertices.items():
    if v == 1: starts.append(k)
  
def dfs(v, path, visited):
  if v in path: return True
  if v in visited: return False
  
  visited.append(v)
  if v in edges:
    children = edges[v]
    for i in range(len(children)):
      if dfs(children[i], path, visited) == False:
        return False
  
  visited.pop()
  path.append(v)
  return True
