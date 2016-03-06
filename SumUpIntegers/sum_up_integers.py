import random

class Puzzle_List():
	def __init__(self, ans_k, puzzle_list):
		self.ans_k = ans_k
		self.puzzle_list = puzzle_list

def mk_list(expected_sum):
	n = 0
	s = expected_sum
	l = []
	r = random.Random()
	r.seed(hash(random.random()))

	while s > 0:
		n = r.randint(1, s)
		s = s - n
		l.append(n)

	return l

def mk_puzzle(expected_sum, opt_equal = "equal"):
	la = mk_list(expected_sum)
	lb = mk_list(expected_sum)

	la[0:0] = lb
	k = len(lb) - 1
	if opt_equal == "unequal":
		k = -1
		del la[0]
	
	return Puzzle_List(k, la)

def assert_ans_k(expected_k, puzzle_list):
	if expected_k == puzzle_list.ans_k:
		print "Find k =", expected_k
	else:
		print "Wrong k = ", expected_k, ". The right k =", puzzle_list.ans_k

if __name__ == "__main__":
	puzzles = []
	puzzles.append(mk_puzzle(99))
	puzzles.append(mk_puzzle(789))
	puzzles.append(mk_puzzle(1983))
	puzzles.append(mk_puzzle(6228806))
	puzzles.append(mk_puzzle(99, "unequal"))
	puzzles.append(mk_puzzle(789, "unequal"))
	puzzles.append(mk_puzzle(1983, "unequal"))
	puzzles.append(mk_puzzle(6228806, "unequal"))

	for p in puzzles:
		ls = p.puzzle_list
		k = -1
		i = 0
		j = len(ls) - 1
		sum_a = ls[i]
		sum_b = ls[j]

		while j - i > 1:
			if sum_a > sum_b:
				j = j - 1
				sum_b += ls[j]
			elif sum_a < sum_b:
				i = i + 1
				sum_a += ls[i]
			else:
				if j - i > 1:
					i = i + 1
					sum_a += ls[i]

		if sum_a == sum_b:
			k = i

		assert_ans_k(k, p)