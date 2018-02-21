def ascending(val):
	for i in range(1,len(val)):
		j = val[i]
		p = i-1
		while p>=0:
			if val[p] > j:
				val[p+1] = val[p]
				val[p]=j
				p = p-1
			else:
				break 

	return val	
def descending(val):
	for i in range(1,len(val)):
		j = val[i]
		p = i-1
		while p>=0:
			if val[p] < j:
				val[p+1] = val[p]
				val[p] = j
				p = p-1
			else:
				break
	return val       
