import { Address } from '@multiversx/sdk-core/out';
import { boostContracts, dailyTasksContracts } from '../config';

export const dailyTasksContract = (shard: number) => {
    return new Address(dailyTasksContracts[shard]);
};

export const boostContract = (shard: number) => {
    return new Address(boostContracts[shard]);
};
