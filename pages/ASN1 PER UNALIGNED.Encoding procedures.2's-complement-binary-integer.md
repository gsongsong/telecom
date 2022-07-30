title:: ASN1 PER UNALIGNED/Encoding procedures/2's-complement-binary-integer
public:: true

- Given the length of the field _n_ (from ASN.1 definition, length determinant or others), the value is determined by:
	- $$-2^{n-1}b[0]+\sum_{i=1}^{n-1}{2^{n-1-i}}b[i]$$
	- where $$n$$ is the length of the bitfield and $$b[i]$$ is the value of i-th position i  the bitfield.
	- ```text
	   0                    n-1
	  +--------+-------+---+-------+
	  | b[0]   | b[1]  |...| b[n-1]|
	  +--------+-------+---+-------+
	   -2^(n-1) 2^(n-2) ... 2^0
	  ```