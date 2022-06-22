title:: Band combination and cell suitability (NR)
type:: article
tags:: band combination, NR
public:: true

- > ==Disclaimer==: This article summarizes the very basic and general IEs. When concerning dual connectivity, IAB, DAPS or others, other IEs not mentioned in this article may have to be considered.
- In determining whether a cell is suitable for a UE, band combination related capabilities cannot be disregarded.
- # NR capabilities
	- ((62b27b0d-6a1d-43d0-b754-94be14d4a954)), ((62b27b0d-65b0-473c-951f-2042a3e0f2ee)), ((62b27b0d-7a5e-463e-8afd-b8ded94aebde)) and ((62b2869c-14f6-49f4-9998-4747831c1182)) are related capabilities:
	  id:: 2da29547-33e3-4025-b1f2-3def6830e499
	  ```yml
	  UE-NR-Capability:
	    rf-Parameters:
	      supportedBandListNR (BandNR[])
	      supportedBandCombinationList[-suffix] (BandCombination[-suffix][])
	      featureSets (FeatureSets)
	      featureSetCombinations (FeatureSetCombination[])
	  ```
	- ## Supported band list
	  id:: 62b27b0d-6a1d-43d0-b754-94be14d4a954
		- UE indicates a list of supported bands with their channel bandwidths:
		  ```yml
		  BandNR:
		    bandNR (FreqBandIndicatorNR)
		    channelBWs-DL
		    channelBWs-UL
		    channelBWs-DL-v1590
		    channelBWs-UL-v1590
		    asymmetricBandwidthCombinationSet
		  ```
		- One thing should be noted that 90 MHz bandwidth should be checked in ((62b27fae-6f78-4fe6-90fa-ee9bc99a2ddf)) and ((62b284aa-0383-4ebf-a42b-dfe430431263)).
	- ## Supported band combination list
	  id:: 62b27b0d-65b0-473c-951f-2042a3e0f2ee
		- Given the list of bands, UE indicates a list of supported combinations of bands. In this context, only one band and one component carrier also constructs a band combination.
		  There are number of supported abnd combination list IEs with different suffixes and all necessary child IEs across suffixes are accumulated under one IE in this article:
		  ```yml
		  BandCombination[-suffix]:
		    bandList (BandParameters[]):
		      - bandNR
		        ca-BandwidthClassDL-NR
		        ca-BandwidthClassUL-NR
		    featureSetCombination (FeatureSetCombinationId)
		    supportedBandwidthCombinationSet
		  ```
		- `featureSetCombination` refers a unique ID of ((62b2869c-14f6-49f4-9998-4747831c1182)), which means supported features across bands and CCs.
	- ## Feature set combination
	  id:: 62b2869c-14f6-49f4-9998-4747831c1182
		- Feature set combination referred by ((62b27b0d-65b0-473c-951f-2042a3e0f2ee)) is a combination of feature sets across multiple bands:
		  ```yml
		  FeatureSetCombination (FeatureSetsPerBand[]):
		    - FeatureSetsPerBand (FeatureSet[]):
		      - downlinkSetNR (FeatureSetDownlinkId)
		        uplinkSetNR (FeatureSetUplinkId)
		  ```
		- This can be interpreted as two-dimensional matrix:
		  ```txt
		  +-----+-------------------------------+-----+---------------------------------+
		  |     | FeatureSetCombination[0]      | ... | FeatureSetCombination[n-1]      |
		  |     | (FeatureSetsPerBand #0)       | ... | (FeatureSetsPerBand #n-1)       |
		  +-----+-------------------------------+-----+---------------------------------+
		  | 1st | FeatureSetCombination[0][0]   | ... | FeatureSetCombination[n-1][0]   |
		  | row | (FeatureSet #0 of 1st band)   |     | (FeatureSet #0 of nth band)     |
		  +-----+-------------------------------+-----+---------------------------------+
		  | ... | ...                           | ... | ...                             |
		  +-----+-------------------------------+-----+---------------------------------+
		  | mth | FeatureSetCombination[0][m-1] | ... | FeatureSetCombination[n-1][m-1] |
		  | row | (FeatureSet #m-1 of 1st band) |     | (FeatureSet #m-1 of nth band) * |
		  |     |  |                            |     |                                 |
		  +-----+--+----------------------------+-----+---------------------------------+
		           |   +---------------+
		           +-> | downlinkSetNR |
		               | uplinkSetNR   |
		               +---------------+
		  ```
		  When UE receives _RRCReconfiguration_ message, it applies one of rows in the given matrix.
		- `downlinkSetNR` and `uplinkSetNR` refer unique IDs of ((62b27b0d-3d17-47e6-93a3-b392a58c3881)) and ((62b283f7-968b-4a23-a374-5172d03516c1)), respectively. It is 1-indexed and a value `0` means a given feature set combination does not support the corresponding band as DL and UL, respectively.
	- ## Feature sets
	  id:: 62b27b0d-7a5e-463e-8afd-b8ded94aebde
		- Feature sets are collection of features supported per band and/or per CC:
		  ```yml
		  FeatureSets:
		    featureSetsDownlink[-suffix] (FeatureSetDownlink[-suffix][])
		    featureSetsDownlinkPerCC[-suffix] (FeatureSetDownlinkPerCC[-suffix][])
		    featureSetsUplink[-suffix] (FeatureSetUplink[-suffix][])
		    featureSetsUplinkPerCC[-suffix] (FeatureSetUplinkPerCC[-suffix][])
		  ```
		- ### Feature set downlink
		  id:: 62b27b0d-3d17-47e6-93a3-b392a58c3881
			- ```yml
			  FeatureSetDownlink[-suffix]:
			    featureSetListPerDownlinkCC (FeatureSetDownlinkPerCC-Id[])
			    intraBandFreqSeparationDL[-suffix] (FreqSeparationClass, FreqSeparationClassDL[-suffix])
			    scellWithoutSSB
			  ```
			- In case of having two or more feature set downlink per CC, it means that a UE supports a given band with any order of feature set downlink per CC.
		- ### Feature set downlink per CC
		  id:: 62b27fae-6f78-4fe6-90fa-ee9bc99a2ddf
			- ```yml
			  FeatureSetDownlinkPerCC:
			    supportedSubcarrierSpacing (SubcarrierSpacing)
			    supportedBandwidthDL (SupportedBandwidth)
			    channelBW-90mhz
			    supportedMinBandwidthDL-r17 (SupportedBandwidth-v1700)
			  ```
		- ### Feature set uplink
		  id:: 62b283f7-968b-4a23-a374-5172d03516c1
			- ```yml
			  FeatureSetUplink:
			    featureSetListPerUplinkCC (FeatureSetUplinkPerCC-Id[])
			    intraBandFreqSeparationUL[-suffix] (FreqSeparationClass, FreqSeparationClassUL[-suffix])
			  ```
			- In case of having two or more feature set uplink per CC, it means that a UE supports a given band with any order of feature set uplink per CC.
		- ### Feature set uplink per CC
		  id:: 62b284aa-0383-4ebf-a42b-dfe430431263
			- id:: 62b284af-e16c-4557-a4b3-0db00b822856
			  ```yml
			  FeatureSetUplinkPerCC:
			    supportedSubcarrierSpacingUL (SubcarrierSpacing)
			    supportedBandwidthUL (SupportedBandwidth)
			    channelBW-90mhz
			    supportedMinBandwidthUL-r17 (SupportedBandwidth-v1700)
			  ```
- # References
	- 3GPP TS 38.306 NR; User Equipment (UE) radio access capabilities
	- 3GPP TS 38.331 NR; Radio Resource Control (RRC) protocol