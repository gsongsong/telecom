title:: Band combination and cell suitability (NR)
type:: article
tags:: band combination, NR

- _==Disclaimer==: This article summarizes the very basic and general IEs. When concerning dual connectivity, IAB or others, other IEs not mentioned in this article may have to be considered._
- In determining whether a cell is suitable for a UE, band combination related capabilities cannot be disregarded.
- # NR capabilities
	- Supported band list, supported band combination list, feature sets and feature set combinations are related capabilities:
	  ```yml
	  UE-NR-Capability:
	    rf-Parameters:
	      supportedBandListNR (BandNR[])
	      supportedBandCombinationList[-suffix] (BandCombination[-suffix][])
	      featureSets (FeatureSets)
	      featureSetCombinations (FeatureSetCombination[])
	  ```
- # Supported band list
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
- # Supported band combination list
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
- # Feature sets
	- NOW Feature sets are collection of features supported per band and/or per CC:
	  ```yml
	  FeatureSets:
	    featureSetsDownlink[-suffix] (FeatureSetDownlink[-suffix][])
	    featureSetsDownlinkPerCC[-suffix] (FeatureSetDownlinkPerCC[-suffix][])
	    featureSetsUplink[-suffix] (FeatureSetUplink[-suffix][])
	    featureSetsUplinkPerCC[-suffix] (FeatureSetUplinkPerCC[-suffix][])
	  ```
	- ## Feature set downlink
		- ```yml
		  FeatureSetDownlink[-suffix]:
		    featureSetListPerDownlinkCC (FeatureSetDownlinkPerCC-Id[])
		  ```
- # Feature set combination
	-
- # Visualization
	-
- # References
	- 3GPP TS 38.306 NR; User Equipment (UE) radio access capabilities
	- 3GPP TS 38.331 NR; Radio Resource Control (RRC) protocol