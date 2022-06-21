title:: Band combination and cell suitability (NR)
type:: article
tags:: band combination, NR

- _Disclaimer: This article summarizes the very basic and general IEs. When concerning dual connectivity, IAB or others, other IEs not mentioned in this article may have to be considered._
- # UE-NR-Capability
	- ```yml
	  UE-NR-Capability:
	    rf-Parameters:
	      supportedBandListNR (BandNR[])
	      supportedBandCombinationList[-suffix] (BandCombination[-suffix][])
	  ```
- # BandNR
	- ```yml
	  BandNR:
	    bandNR (FreqBandIndicatorNR)
	    channelBWs-DL
	    channelBWs-UL
	    channelBWs-DL-v1590
	    channelBWs-UL-v1590
	    asymmetricBandwidthCombinationSet
	  ```
- # BandCombination[-suffix]
	- In this section, necessary child fileds under `-suffix` are accumulated
	- ```yml
	  BandCombination[-suffix]:
	    bandList (BandParameters[])
	    featureSetCombination (FeatureSetCombinationId)
	    supportedBandwidthCombinationSet
	    ca-ParametersNRDC (CA-ParametersNRDC)
	    
	  ```
- # Visualization
	-
- # References
	- 3GPP TS 38.331 NR; Radio Resource Control (RRC) protocol