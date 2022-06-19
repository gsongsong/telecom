type:: article
tags:: #NR
public:: true

- # Definition
	- Multiple Frequency Band Indicator
	- 3GPP defines a number of frequency bands in 3GPP TS 38.101-1 and 38.101-2 for FR1 and FR2, respectively. If frequency range of a carrier falls into those of two or more frequency bands,that carrier can operate as multiple frequency bands.
- # Frequency band broadcast
	- One or more frequency band indicators are broadcast in SIB1:
	  ```yml
	  SIB1:
	    servinCellConfigCommon  (ServingCellXonfigCommonSIB):
	      downlinkConfigCommon  (DownlinkConfigCommonSIB):
	        frequencyInfoDL     (FrequencyInfoDL-SIB):
	          frequencyBandList (MultiFrequencyBandListNR-SIB):
	            - freqBandIndicaotrNR
	      uplinkConfigCommon    (UplinkConfigComminSIB):
	        frequencyInfoUL     (FrequencyInfoUL-SIB):
	          frequencyBandList (MultiFrequencyBandListNR-SIB):
	            - freqBandIndicaotrNR
	  ```
- # Frequency band selection by a UE
	- If a UE supports one or more frequency bands broadcast in SIB1, it selects the first supported one. According to this, the UE and the network implicitly aligns a frequency band they are going to use:
	  > 4> select the first frequency band in the _frequencyBandList_, for FDD from _frequencyBandList_ for uplink,or for TDD from _frequencyBandList_ for downlink, which the UE supports - 3GPP TS 38.331 clause 5.2.2.4.2  Actions upon reception of the SIB1
- # Frequency band change by the network
	- If the network determines that they need to align with a different frequency band than before, it can be done by RRC signalling with the following IEs:
	  ```yml
	  CellGroupConfig:
	    spCellConfig:
	      reconfigurationWithSync:
	        spCellConfigCommon (ServingCellConfigCommon:
	          downlinkConfigCommon (DownlinkConfigCommon):
	            frequencyInfoDL     (FrequencyInfoDL):
	              frequencyBandList (MultiFrequencyBandListNR):
	                - freqBandIndicaotrNR
	          uplinkConfigCommon (UplinkConfigCommon):
	            frequencyInfoUL     (FrequencyInfoUL):
	              frequencyBandList (MultiFrequencyBandListNR):
	                - freqBandIndicaotrNR
	  ```
	- Contrary to SIB1, _frequencyBandList_ can contain only one _freqBandIndicatorNR_.
	- The most important thing is that these IEs are included in _reconfigurationWithSync_, which means that the network needs to command the UE to ==perform intra-cell handover or intra-cell PSCell change to re-align a frequency band.==
- # References
	- 3GPP TS 38.101-1 NR; UE radio Tx and Rx; Part 1: Range 1
	- 3GPP TS 38.101-2 NR; UE radio Tx and Rx Part 2: Range 2
	- 3GPP TS 38.331 NR; Radio Resource Control (RRC) protocol