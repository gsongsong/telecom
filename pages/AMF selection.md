type:: article
tags:: 5GS
public::

- When UE accesses to RAN, RAN needs to bridge UE and 5GC. AMF is exposed to RAN via NG interface and AMF selection is required.
- # Factors affecting to AMF selection
	- Relative AMF capacity
	- TNL association usage
	- TNL association weight factor
	- PLMN
	- AMF identifier
	- Slice (S-NSSAI)
	- Establishment/resume cause
- # Messages and IEs
	- RRCSetupRequest
		- ```yml
		  RECSetupRequest:
		    ue-Identity (choice):
		      randomValue
		      ng-5G-S-TMSI-Part1
		    establishmentCause
		  ```
	- RRCSetupComplete
		- ```yml
		  RECSetupComplete:
		    selectedPLMN-Identity
		    registeredAMF
		    s-NSSAI-List
		    ng-5G-S-TMSI-Value (choice):
		      ng-5G-S-TMSI
		      ng-5G-S-TMSI-Part1
		  ```
	- RRCResumeRequest[1]
		- ```yml
		  RRCResumeRequest[1]:
		    resumeIdentity
		    
		  ```
	- RRCResumeComplete
		- ```yml
		  RRCResumeComplete:
		    selectedPLMN-
		  ```
	- NG SETUP RESPONSE
		- ```yml
		  NG SETUP RESPONSE:
		    Served GUAMI List
		    Relative AMF Capacity
		    PLMN Support List:
		      - PLMN Identity
		        Slice Support List
		  ```
	- AMF CONFIGURATION UPDATE
		- ```yml
		  AMF CONFIGURATION UPDATE:
		    Served GUAMI List
		    Relative AMF Capacity
		    PLMN Support List:
		      - PLMN Identity
		        Slice Support List
		    AMF TNL Association to Add List:
		      - TNL Association Usage
		        TNL Address Weight Factor
		    AMF TNL Association to  List:
		      - TNL Association Usage
		        TNL Address Weight Factor
		  ```
	- OVERLOAD START
		- ```yml
		  OVERLOAD START:
		    AMF Overload Response
		    Overload Start NSSAI List:
		      - Slice Overload List:
		        - S-NSSAI
		        Slice Overload Response
		  ```
- # References
	- ((62bb183f-4a25-44e8-9a5f-7cb5985764e8))
	- ((62b93059-3441-4676-a2c2-574516554d77))
	- ((62b92d3a-3a25-4aaa-a44a-ca9b61e2675d))
	- ((62b92bde-0a6b-45ea-886d-bb2bc6f0a1ce))
	- ((62b92db4-4d64-4c61-a9c8-06b5e2492668))