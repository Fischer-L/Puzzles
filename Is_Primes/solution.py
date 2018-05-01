# For any prime number larger than 30, it must be this form:
#   - 30k + i
#   - where k = 1, 2, 3, ...
#   - where i = 1, 7, 11, 13, 17, 19, 23, 29
# So we can test an number larger than 30 with the above form
def isPrime(n):
  if n <= 30:
    return n in [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
  else:
    return (n % 30) in [1, 7, 11, 13, 17, 19, 23, 29]
