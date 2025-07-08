

export function isRunningInDocker(): boolean {
    return process.env.IN_DOCKER === 'true';
}