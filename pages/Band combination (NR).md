type:: article
tags:: band combination, NR

- _Note: Currently NR CA in standalone and NR-DC are i scope of this article. Missing fields/IEs/properties will be updated continuously._
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
	    channelBWs-DL-IAB-r16
	    channelBWs-UL-IAB-r16
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
- # References
	- 3GPP TS 38.331 NR; Radio Resource Control (RRC) protocol