type:: article
tags:: 5GS
public::

- When UE accesses to RAN, RAN needs to bridge UE and 5GC. AMF is exposed to RAN via NG interface and AMF selection is required.
- # Factors taken into consideration in AMF selection
	- PLMN
		- When UE accesses network, it reports its selected PLMN via ((62b94c35-7719-4d71-9052-6d20b8ab37aa)) or ((62b94c43-aa41-46a0-bc54-31a6d3ed2324)). RAN shall select AMF which supports PLMN selected by UE. Supported PLMNs of AMF is indicated via ((62b94c4a-9bfc-4ce4-b2e5-fea1b75fdb89)) and ((62b94c6c-b805-4acf-89e9-bb065e6dd853)).
	- AMF identifier
		- If UE has been registered before, it might have been assigned with TMSI. In such a case, UE may report TMSI previously assigned or AMF previously registered in ((62b94c1b-1df9-4224-8794-b5d40eb987b6)) and/or ((62b94c35-7719-4d71-9052-6d20b8ab37aa)) and RAN shall select corresponding AMF or another AMF within the same AMF set. This may reduce context retrieval time on 5GC side.
	- Slice (S-NSSAI)
		-
- # Factors taken into consideration for load balancing
	- Relative AMF capacity
		- Relative AMF capacity is signalled via ((62b94c4a-9bfc-4ce4-b2e5-fea1b75fdb89)) and ((62b94c6c-b805-4acf-89e9-bb065e6dd853)). RAN can load balance among multiple AMFs connected via NG interfaces.
	- TNL association usage
		- Having multiple TNL associations, each TNL association is assigned to be used for non-UE associated signalling, UE associated signalling or both. It is signalled via ((62b94c6c-b805-4acf-89e9-bb065e6dd853)). For accessing UE, TNL association allowed for UE associated signalling shall be used.
	- TNL association weight factor
		- In addition to TNL association usage, each TNL association is assigned with weight factor so that RAN can load balance among multiple TNL associations. If weight factor is equal to zero, the corresponding TNL association shall not be used.
	- Establishment/resume cause and overload status
- # Messages and IEs
	- RRCSetupRequest
	  id:: 62b94c1b-1df9-4224-8794-b5d40eb987b6
		- ```yml
		  RECSetupRequest:
		    ue-Identity (choice):
		      randomValue
		      ng-5G-S-TMSI-Part1
		    establishmentCause
		  ```
	- RRCSetupComplete
	  id:: 62b94c35-7719-4d71-9052-6d20b8ab37aa
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
	  id:: 62b94c43-aa41-46a0-bc54-31a6d3ed2324
		- ```yml
		  RRCResumeComplete:
		    selectedPLMN-
		  ```
	- NG SETUP RESPONSE
	  id:: 62b94c4a-9bfc-4ce4-b2e5-fea1b75fdb89
		- ```yml
		  NG SETUP RESPONSE:
		    Served GUAMI List
		    Relative AMF Capacity
		    PLMN Support List:
		      - PLMN Identity
		        Slice Support List
		  ```
	- AMF CONFIGURATION UPDATE
	  id:: 62b94c6c-b805-4acf-89e9-bb065e6dd853
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
		    AMF TNLNAssociation to Remove 
		    AMF TNL Association to Update List:
		      - TNL Association Usage
		        TNL Address Weight Factor
		  ```
	- AMF STATUS INDICATION
		- ```yml
		  AMF STATUS INDICATION:
		    Unavailable GUAMI List
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
	  id:: 62b93192-029a-4dcc-9015-9e064077ec06
	- ((62b92bde-0a6b-45ea-886d-bb2bc6f0a1ce))
	- ((62b92db4-4d64-4c61-a9c8-06b5e2492668))