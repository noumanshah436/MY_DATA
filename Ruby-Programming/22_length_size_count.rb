arr = [1,2,3,4,5]
arr.length   # => 5
arr.size     # => 5
arr.count    # => 5

# The size method is an alias of #length, meaning that the two share their source code and can be used interchangeably.


#  count:

# With no arguments, #count will perform the same function as #size and #length.

# Interestingly, #count can not be used with a string in exactly the same way as #length and #size. For example:

# p "my name is jeff".count    # give error

"Mississippi".count("i") # => 4
