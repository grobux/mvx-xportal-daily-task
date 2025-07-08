import { ProxyNetworkProvider } from "@multiversx/sdk-network-providers/out";

export async function getEpochInfo(provider: ProxyNetworkProvider) {
    const networkConfig = await provider.getNetworkConfig();
    const networkStatus = await provider.getNetworkStatus();

    const roundsPerEpoch = Number(networkConfig.RoundsPerEpoch);
    const roundDuration = Number(networkConfig.RoundDuration);

    const epochNumber = networkStatus.EpochNumber;
    const roundsPassed = Number(networkStatus.RoundsPassedInCurrentEpoch);

    const roundsRemaining = roundsPerEpoch - roundsPassed;
    const msUntilNextEpoch = roundsRemaining * roundDuration;
    const nextEpochDate = new Date(Date.now() + msUntilNextEpoch);

    return {
        currentEpoch: epochNumber,
        nextEpochTimestamp: Date.now() + msUntilNextEpoch,
        nextEpochDate
    };

}

export interface NextEpochInfo {
    currentEpoch: number;
    nextEpochTimestamp: number;
    nextEpochDate: Date;
}
