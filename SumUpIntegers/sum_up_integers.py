from array import array

class PlatePuttingError(Exception):
	def __init__(self, tower_tag, top_most, plate_put):
		self.msg = str.format("Cannot put the bigger plate {0} over the top most plate {1} of the tower {2}", plate_put, top_most, tower_tag)

	def __str__(self):
		return self.msg	

class Tower:
	"""This is tower for placing plates"""

	def __init__(self, tag, plate_nums):
		self.tag = tag
		self._tower = array("i")
		for i in range(plate_nums):
			self._tower.append(i)
		self._tower.reverse()

	def take(self):
		if len(self._tower) > 0:
			return self._tower.pop()
		else:
			return

	# plate is Int
	def put(self, plate):
		top_most = self._tower[len(self._tower) - 1]
		if top_most >= 0 and top_most <= plate:
			raise PlatePuttingError(self.tag, top_most, plate)
		self._tower.append(plate)

	def sizes(self):
		return len(self._tower)

	def printout(self):
		print str.format("The tower of {0}:", self.tag)
		sizes = self.sizes() or 0
		if sizes:
			sizes = range(sizes)
			sizes.reverse()
			for i in sizes:
				print " ", self._tower[i]

if __name__ == "__main__":
	start_tower = Tower("Start Tower", 10)
	mid_tower = Tower("Middle Tower", 0)
	dest_tower = Tower("Destination Tower", 0)
	start_tower.put(22)
	start_tower.printout()
	mid_tower.printout()
	dest_tower.printout()
