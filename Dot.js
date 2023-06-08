def dot_product(v1, v2):
    if len(v1) != len(v2):
        raise ValueError("Vectors must have the same length.")
    
    result = 0
    for i in range(len(v1)):
        result += v1[i] * v2[i]
    
    return result


def check_orthogonal(vectors):
    for v1, v2 in vectors:
        result = dot_product(v1, v2)
        if result == 0:
            print("Vectors", v1, "and", v2, "are orthogonal.")
        else:
            print("Vectors", v1, "and", v2, "are not orthogonal.")


# Example usage:
vectors = [([1, 0, -1], [2, 1, 3]), ([2, -1], [4, 2]), ([3, 4, -5], [1, -1, 2])]
check_orthogonal(vectors)
