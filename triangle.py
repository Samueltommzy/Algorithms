def printTriangle(x):
	for i in range(1, x):
		for j in range(i):
			print '*',
		print
x = input("Enter the number of rows for the triangle: >> ")		
printTriangle(x)